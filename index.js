'use strict';

var path = require('path');
var http = require('http');
const bodyParser= require('body-parser') 
var express = require('express');
var userRouter = require('./routes/user.routes');
var locationRouter = require('./routes/location.routes');
var jsyaml = require('js-yaml');
var fs = require('fs');
var oasTools = require('oas-tools');
var jwt = require('jsonwebtoken');

var serverPort = 8080;
var spec = fs.readFileSync(path.join('api/openapi.yaml'), 'utf8');
var oasDoc = jsyaml.safeLoad(spec);

var app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/UserAccounts', userRouter);
app.use('/api/Locations', locationRouter);


var options_object = {
    loglevel: 'info',
    logfile: './logs/api.log',
    strict: false,
    router: true,
    validator: true,
    docs: {
      apiDocs: '/api',
      apiDocsPrefix: '',
      swaggerUi: '/docs',
      swaggerUiPrefix: ''
    },
    oasSecurity: true,
    securityFile: {
        Bearer: {
          issuer: 'ISA Auth',
          algorithms: ['HS256'],
          key: 'secretKey'
      }
    },
    oasAuth: true,
    grantsFile: {
      // your authorization settings
    },
    ignoreUnknownFormats: true
};
oasTools.configure(options_object);
const url = '';


oasTools.initialize(oasDoc, app, function() {
    http.createServer(app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
});



