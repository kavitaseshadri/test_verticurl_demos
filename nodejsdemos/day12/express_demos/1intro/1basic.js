//express internally uses connect
//all features of connect are available in express and some more
//connect and express have been created by the same team!

var express = require('express');
var http = require('http');
//create an express application
var app = express()
    .use(function (req, res, next) {
        res.end('hello express');
    })

http.createServer(app)
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })