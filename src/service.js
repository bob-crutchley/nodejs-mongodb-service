const express = require('express');
const service = express.Router();
const findOperation = require('./operation/find');
const findOneOperation = require('./operation/findOne');
const insertOneOperation = require('./operation/insertOne');
const MongoRequestHeader = require('./model/mongoRequestHeader');

service.post('/find', (request, response) => {
    new MongoRequestHeader(request.headers).validate(headers => {
        findOperation({headers: headers, body: request.body}, result => { response.send(result)})
    }, error => {
        response.send(error)
    });
});

service.post('/findOne', (request, response) => {
    new MongoRequestHeader(request.headers).validate(headers => {
        findOneOperation({headers: headers, body: request.body}, result => { response.send(result)})
    }, error => {
        response.send(error)
    });
});

service.post('/insertOne', (request, response) => {
    new MongoRequestHeader(request.headers).validate(headers => {
        insertOneOperation({headers: headers, body: request.body}, result => { response.send(result)})
    }, error => {
        response.send(error)
    });
});

module.exports = service;
