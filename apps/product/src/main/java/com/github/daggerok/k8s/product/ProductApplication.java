package com.github.daggerok.k8s.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.cloud.client.SpringCloudApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import java.net.URI;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import static java.util.Collections.singletonMap;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
class Product {
    private UUID id;
    private String name;
}

@Log4j2
@RestController
class ProductResource {

    private Map<UUID, Product> products = new ConcurrentHashMap<>();

    @PostConstruct
    public void init() {
        Flux.just("iPhone", "Nexus", "ololo", "hey", "hi")
            .map(name -> new Product().setName(name))
            .map(product -> product.setId(UUID.randomUUID()))
            .doOnEach(log::info)
            .subscribe(product -> products.put(product.getId(), product));
    }

    @GetMapping("/product/{id}")
    public Mono<Product> get(@PathVariable(required = true) UUID id) {
        log.info(id);
        // Objects.requireNonNull(id);
        return Flux.fromIterable(products.values())
                   .filter(product -> id.equals(product.getId()))
                   .singleOrEmpty();
    }

    @GetMapping
    public Flux<Product> getAll(@RequestParam(name = "page", required = false, defaultValue = "1") Integer page,
                                @RequestParam(name = "size", required = false, defaultValue = "20") Integer size) {

        Flux<Product> all = Flux.fromIterable(products.values());
        Flux<Product> skipped = page > 1 ? all.skip((page - 1) * size) : all;
        log.info("t={}, p={}, s={}", products.size(), page, size);
        return skipped.limitRequest(size);
    }

    /*
    @PostMapping
    public Mono<Product> append(@RequestBody Product payload, ServerHttpRequest request, ServerHttpResponse response) {

        if (Objects.isNull(payload)) {
            response.setStatusCode(HttpStatus.BAD_REQUEST);
            return Mono.error(new RuntimeException("payload may not be null"));
        }

        String name = Optional.ofNullable(payload.getName()).orElse("");
        if (name.isEmpty()) {
            response.setStatusCode(HttpStatus.BAD_REQUEST);
            return Mono.error(new RuntimeException("name may not be null"));
        }

        UUID id = Optional.ofNullable(payload.getId()).orElseGet(UUID::randomUUID);
        Product p = new Product().setId(id).setName(name);
        products.put(p.getId(), p);

        URI uri = request.getURI();
        String location = String.format("%s://%s/product/%s", uri.getScheme(), uri.getAuthority(), p.getId());
        response.getHeaders().setLocation(URI.create(location));
        response.setStatusCode(HttpStatus.CREATED);
        return Mono.just(p);
    }
    */

    @PostMapping
    public Mono<ResponseEntity> append(@RequestBody Product payload, ServerHttpRequest request, ServerHttpResponse response) {

        if (Objects.isNull(payload)) return Mono.just(
                ResponseEntity.badRequest()
                              .body(singletonMap("error", "payload may not be null"))
        );

        String name = Optional.ofNullable(payload.getName()).orElse("");
        if (name.isEmpty()) return Mono.just(
                ResponseEntity.badRequest()
                              .body(singletonMap("error", "name may not be null"))
        );

        UUID id = Optional.ofNullable(payload.getId()).orElseGet(UUID::randomUUID);
        Product p = new Product().setId(id).setName(name);
        products.put(p.getId(), p);

        URI uri = request.getURI();
        String location = String.format("%s://%s/product/%s", uri.getScheme(), uri.getAuthority(), p.getId());
        return Mono.just(ResponseEntity.created(URI.create(location))
                                       .body(p));
    }
}

@SpringCloudApplication
public class ProductApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProductApplication.class, args);
    }
}
