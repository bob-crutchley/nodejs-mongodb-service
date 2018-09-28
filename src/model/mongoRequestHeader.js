const Model = require("./model");

class MongoRequestHeader extends Model {
    constructor(headers) {
        super('MongoRequestHeader', {
            databaseName: {
                required: true,
                type: "string",
                value: headers['database-name']
            },
            collectionName: {
                required: true,
                type: "string",
                value: headers['collection-name']
            }
        });
    }

    getDatabaseName() {
        return this.schema.databaseName;
    }

    getCollectionName() {
        return this.schema.collectionName;
    }
}

module.exports = MongoRequestHeader;