const express = require('express');
const app = express();
const applicationPort = 3000;
const applicationHost = '0.0.0.0';
const bodyParser = require('body-parser');

// application config
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/api', require('./src/service'));

app.listen(applicationPort, applicationHost, () => console.log('MongoDB Service Listening on ' + applicationPort));
