const mongoDB = require('../mongo');
const httpStatusCode = require('../constant/httpStatusCode');

module.exports = (mongoRequest, service) => {
    mongoDB(mongoRequest.headers,  collection => {
        collection.insertOne(mongoRequest.body, (error, result) => {
            if (error) {
                console.error(error);
                service({status: httpStatusCode.INTERNAL_SERVER_ERROR, value: 'could not create'});
            }
            service({status: httpStatusCode.OK, value: result})
        })
    });
};
