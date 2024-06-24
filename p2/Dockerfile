FROM openjdk:8u151-jdk-alpine3.7

EXPOSE 8080

ENV APP HOME /usr/src/app

COPY target/webproject-0.0.1-SNAPSHOT.jar SAPP HOME/app.jar

WORKDIR SAPP HOME

ENTRYPOINT exec java -jar app.jar
