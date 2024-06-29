var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
const { dir } = require('console');

var router = express.Router();
//we are using the router manage to manage all our route definition

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))

router.route('/')
    .get((req, res, next) => {
        console.log('get called for /');
        res.sendFile(__dirname + '/public/index.html');
    })
// .post((req, res, next) => {
//     console.log('post called for /');
// })

router.route('/admin')
    .get((req, res, next) => {
        res.send(`<h1>/admin get method was called</h1>`);
        //dynamically created html page
    })
    .post((req, res, next) => {
        res.send(`<h1>/admin post method was called</h1>`);
    })

router.route('/customer')
    .get((req, res, next) => {
        res.send(`<h1>/customer get method was called</h1>`);
    })
    .post((req, res, next) => {
        res.send(`<h1>/customer post method was called</h1>`);
    })

app.use(router);//router plugged in as a middle ware into the application
app.listen(3500, () => {
    console.log('router is listening on port 3500');
})