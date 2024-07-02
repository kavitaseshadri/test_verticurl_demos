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
        res.setHeader('Content-Type', 'application/json');
        const id = req.params.id;
        console.log('id ' + id);
        let searchResult = students.filter((student) => {
            return student.id === id;//when comparing primitives please use === and not ==
        })
        res.send(JSON.stringify(searchResult));
        //here the student object is being converted into a json string
    })
    .get('students/:name', (req, res, next) => { })//this will be igonored
    .get('/students/id/:id', (req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        const id = req.params.id;
        console.log('id ' + id);
        let searchResult = students.filter((student) => {
            return student.id === id;//when comparing primitives please use === and not ==
        })
        res.send(JSON.stringify(searchResult));
        //here the student object is being converted into a json string
    })
    .get('/students/name/:name', (req, res, next) => {
        const name = req.params.name;
        console.log('name ' + name);
        let searchResult = students.filter((student) => {
            return student.name === name;
        })
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(searchResult));
    })
    .post('/students', (req, res, next) => {
        //adding a new record to the collection
        console.log('processing student data json input');
        const { id, name, salary } = req.body;
        console.log(req.body);
        students.push({
            id,
            name,
            salary
        })
        console.log(students);
        res.send(students);
    })
    .put('/students', (req, res, next) => {
        //replacing an existing record with a new value
        //this will be like your edit function in CRUD operations
        console.log('processing student data json input');
        const { id, name, salary } = req.body;
        console.log(req.body);
        const updatedArray = students.map((student, index) => {
            if (student.id === id) {
                student = {
                    id,
                    name,
                    salary
                }
            }
            return student;
        })
        students = [...updatedArray];
        res.send(students);
    })
    .delete('/students/:id', (req, res, next) => {
        const id = req.params.id;
        console.log('id ' + id);
        console.log(students);
        let leftoverArray = students.filter((student) => {
            return student.id !== id;
        })
        students = leftoverArray;
        console.log(students);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(students));
    })
    .delete('/students/id/:id', (req, res, next) => {

    })
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })