/*
 *	@Title: Hyblab 2017
 *	@Desc: N/A
 */

'use strict'


var express = require('express');
var app = express();
var http = require('http');

// Not very usefull
var morgan = require('morgan');

// If we are on the deploy env, it'll be 80
var port = process.env.PORT || 9865;

//don't show the log when it is test
if(process.env.NODE_ENV !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

// --- Routes
require('./routes.js')(app, express);

var server = http.createServer(app);
server.listen(port, function() {
  console.log("Node server running on http://localhost:"+port);
  });

module.exports = app;