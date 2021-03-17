'use strict';

var path = require('path');
var http = require('http');
var YAML = require('js-yaml');
var express = require('express');
var userRouter = require('./routes/user.routes');
var locationRouter = require('./routes/location.routes');
var serverPort = 8080;

var jsyaml = require('js-yaml');
var fs = require('fs');
var oasTools = require('oas-tools');

var spec = fs.readFileSync(path.join('api/openapi.yaml'), 'utf8');
var oasDoc = jsyaml.safeLoad(spec);
var app = express();


app.use('/api/UserAccounts', userRouter);
app.use('/api/Locations', locationRouter);


var options_object = {
    //controllers: './controllers',
    //checkControllers: false,
    loglevel: 'info',
    logfile: './logs/api.log',
    // customLogger: myLogger,
    strict: false,
    router: true,
    validator: true,
    docs: {
      apiDocs: '/api',
      apiDocsPrefix: '',
      swaggerUi: '/docs',
      swaggerUiPrefix: ''
    },
    securityFile: {
      // your security settings
    },
    oasAuth: true,
    grantsFile: {
      // your authorization settings
    },
    ignoreUnknownFormats: true
  };
  
  oasTools.configure(options_object);


oasTools.initialize(oasDoc, app, function() {
    http.createServer(app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
});


