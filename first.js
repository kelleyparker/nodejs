#!/usr/bin/node
var http = require('http');
var dt = require('./myfirstmodule');


http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello world!');
}).listen(8080);
