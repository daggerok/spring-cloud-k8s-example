# jar

[[toc]]

## clone repository

```bash
git clone --depth=1 --no-single-branch https://github.com/daggerok/spring-cloud-k8s-example app ; cd $_
```

## compile

```bash
./mvnw -DskipTests
```

## run

```bash
java -jar infrastructure/eureka/target/*.jar
java -jar apps/product/target/*.jar
```

## tear down

```bash
killall -9 java # or CTRL+C in terminal for each started app
```
