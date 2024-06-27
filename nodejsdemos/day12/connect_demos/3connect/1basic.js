var connect = require('connect');
var http = require('http');
//create a connect dispatcher
var app = connect();
//register with http

http.createServer(app)
    .listen(3500);
console.log('server is running on port 3500');
