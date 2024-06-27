var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

//use function comes from connect()
//incoming urls
//url+verb are the new functions in express framework
//res.send():we can use it to send a dynamically created html page
//res.sendFile();we can use it to send a static html file present in the public folder
//res.redirect();we can acall any other url registered with our application
//declare an array to store user objects

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))
    .get('/', (req, res) => {
        console.log('get method for / route')
    })
    .get('/login', (req, res) => {
        console.log('get method called for /login route');
        res.sendFile(__dirname + '/public/index.html');
    })
    .post('/login', (req, res) => {
        console.log('post method for /post route')
        console.log(req.body);
        const { username, password } = req.body;
        console.log(username, password);
    })
    .get('/register', (req, res) => {
        console.log('get method for /register route');
        res.sendFile(__dirname + '/public/register.html');
        //ask for name,age,password
    })
    .post('/register', (req, res) => {
        console.log('post method for /register route');
        //read the form data data and then create one user objects, store the form data
        //into the user object and store it in an array
        //send the user back to home page
    })
    .get('/new1', (req, res) => {
        res.redirect('/new2');
        //we are re-suing another route or the logic written in another route
    })
    .get('/new2', (req, res) => {
        res.send(`<div><h2></h2>new2 dynamic title</h2><p>Dynamic para</p></div>`)
    })
    .get('/new3', (req, res) => {
        res.send(`<h2>You got an error :D</h2>`)
    })
    .listen(3500, () => {
        console.log('express server running on port 3500');
    })
