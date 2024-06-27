var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))
    .get('/', (req, res) => {
        res.sendFile(__dirname + 'public/index.html');
    })
    .get('/new', (req, res) => {
        console.log('/new called for get method');
        res.redirect('/new1');
        //we can redirect to other routes
    })
    .post('/new', (req, res) => {
        console.log('/new called for post method');
    })
    .get('/new1', (req, res) => {
        console.log('/new1 called for get method');
        res.send(`<h1>Sent from new1 route-a dynamically created page<h1>`);
    })
    .post('/new1', (req, res) => {
        console.log('new1 called for post method');
    })
    .get('/new2', (req, res) => {
        console.log('/new2 called for get method');
        res.sendFile(__dirname + '/public/shark.html');
    })
    .post('/new2', (req, res) => {
        console.log('new2 called for post method');
    })
    .listen(3500, () => {
        console.log('express server is running on port 3500')
    })
