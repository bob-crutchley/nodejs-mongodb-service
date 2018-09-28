FROM node:10.10-alpine
COPY . /nodejs-mongodb-service
WORKDIR /nodejs-mongodb-service
ENTRYPOINT node app.js
