const config = require('./config');
let MongoClient = require('mongodb').MongoClient;

module.exports = (headers, exec) => {
    MongoClient.connect('mongodb://' + config.host + ':' + config.port, {useNewUrlParser: true}).then(db => {
        let collection = db.db(headers.databaseName).collection(headers.collectionName);
        exec(collection);
        db.close().then().catch(error => console.error(error))
    }, err => {
        console.error('database connection failed');
        console.error(err)
    });
};
