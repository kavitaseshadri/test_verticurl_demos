var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

//req.params
//req.query
//reading json input
//RESTAPI signature
//using HTML Template String to create view pages

let students = [
    { id: '101', name: 'Cat', salary: 50000 },
    { id: '102', name: 'Mat', salary: 25000 },
    { id: '103', name: 'Pat', salary: 35000 },
    { id: '104', name: 'Sat', salary: 10000 },
]

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))
    .get('/', (req, res, next) => {
        res.sendFile('__dirname__', '/public/index.html');
    })
    .get('/hello', (req, res) => {
        //how to read query parameters, req.query
        //http://localhost:3500/hello?data='101'&math='3.14'
        //Query String-are the name value pairs after the question mark in the url ?data='101'&math='3.14'
        console.log('/hello for get');
        console.log(req.query);
        const { data, math } = req.query;
        res.send(`<h2>Data</h2>
            <h2>Data</h2><h3>${req.query.data}</h3>
             <h2>Math</h2><h2>${req.query.math}</h2>
              <h2>Data</h2><h3>${data}</h3>
             <h2>Math</h2><h2>${math}</h2>`);
    })
    .post('/login', (req, res, next) => {
        console.log('/login for post');
        const { username, password } = req.body;
        console.log(req.body);
        console.log(username + ' ' + password);
        let template = `<h1>Was this the data you sent?</h1>
        <h3>Username</h3><h2>${username}</h2>
        <h3>Password</h3><h2>${password}</h2>
        <h3>Username</h3><h2>${req.body.username}</h2>
         <h3>Password</h3><h2>${req.body.password}</h2>`;
        res.send(template);
    })
    .post('/processjsoninput', (req, res, next) => {
        console.log('/processjsoninput for post json input');
        const { name, age, percentage } = req.body;
        console.log(req.body);
        console.log('name ' + name + ' age ' + age + ' percentage ' + percentage);
        let template = `
        <h1>Is this the input you provided?</h1>
        <h3>Name</h3><h2>${name}</h2>
          <h3>Age</h3><h2>${age}</h2>
            <h3>Percentage</h3><h2>${percentage}</h2>
        `
        res.send(template);
    })
    .get('/getjsoninput', (req, res, next) => {
        console.log('/getjsonoutput');
        const employee = {
            name: 'John Wick',
            age: 45,
            salary: 35000,
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(employee));
    })
    .get('/students', (req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(students));
    })
    .get('/students/:id', (req, res, next) => {

    })
    .get('/students/id/:id', (req, res, next) => {

    })
    .get('/students/name/:name', (req, res, next) => {

    })
    .post('/students', (req, res, next) => {

    })
    .put('/students', (req, res, next) => {

    })
    .delete('/students/:id', (req, res, next) => {

    })
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })