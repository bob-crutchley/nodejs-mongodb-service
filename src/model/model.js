const httpStatusCode = require('../constant/httpStatusCode');

class Model {
    constructor(modelName, schema) {
        this.modelName = modelName;
        this.schema = schema;
    }
    validate(serviceOperation, error) {
        let errorMessage = '';
        Object.keys(this.schema).forEach(key => {
            let schemaItem = this.schema[key];
            if (!schemaItem) {
                errorMessage += `schema item must be set for model\n`
            }
            if (schemaItem.required && !schemaItem.value ) {
                errorMessage += `property: [${key}] is required but the value is empty\n`
            }
            if (schemaItem.type !== (typeof schemaItem.value)) {
                errorMessage += `property: [${key}] must be; [${schemaItem}]; found ${(typeof schemaItem.value)} instead\n`
            }
        });
        if (errorMessage) {
            console.log(`failed to parse ${this.modelName}:\n` + errorMessage);
            error({status: httpStatusCode.INTERNAL_SERVER_ERROR, value: `failed to parse ${this.modelName}`})
        }
        else {
            serviceOperation(this.asObject())
        }
    }

    asObject() {
        let modelAsObject = {};
        Object.keys(this.schema).forEach(key => {
            modelAsObject[key] = this.schema[key].value
        });
        return modelAsObject
    }
}

module.exports = Model;
