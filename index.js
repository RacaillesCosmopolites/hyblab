'use strict'

var express = require('express');
var app = express();
var http = require('http');

var port = 80;

app.get('/', function (req, res) {
	  res.send("blbl");
	});

var server = http.createServer(app);
server.listen(port, function() {
  console.log("Node server running on http://localhost:"+port);
  });