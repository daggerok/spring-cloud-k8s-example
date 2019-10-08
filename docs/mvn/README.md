# local

[[toc]]

## clone repository

```bash
git clone --depth=1 --no-single-branch https://github.com/daggerok/spring-cloud-k8s-example app ; cd $_
```

## compile and run infrastructure and apps

```bash
./mvnw -pl :eureka  spring-boot:run

./mvnw -pl :product spring-boot:run
```

## tear down

```bash
killall -9 java # or CTRL+C in terminal for each started app
```
