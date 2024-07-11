var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var studentRoutes = require('./routes/student');
const mongoose = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/mixedDB")
    .then(result => {
        console.log('connected');
    })
    .catch(error => {
        console.log('failed');
        console.log(error);
    })

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))
    .use("/", studentRoutes)
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })