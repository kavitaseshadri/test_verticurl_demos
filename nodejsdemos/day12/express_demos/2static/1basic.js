var express = require('express');
var serveStatic = require('serve-static');

var app = express()
    .use(serveStatic(__dirname + '/public'))
    .listen(3500, () => {
        console.log('server is running on port 3500, serving static pages and content');
    })

//we will have to install serve_static package using the command
//npm install serve-static --save