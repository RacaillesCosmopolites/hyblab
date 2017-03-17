'use strict'


var express = require('express');
var app = express();
var http = require('http');


var morgan = require('morgan');

var port = process.env.PORT || 9865;

//don't show the log when it is test
if(process.env.NODE_ENV !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}


// --- Routes
require('./routes.js')(app, express);


// http://stackoverflow.com/questions/20210522/nodejs-mysql-error-connection-lost-the-server-closed-the-connection


var server = http.createServer(app);
server.listen(port, function() {
  console.log("Node server running on http://localhost:"+port);
  });

module.exports = app;


