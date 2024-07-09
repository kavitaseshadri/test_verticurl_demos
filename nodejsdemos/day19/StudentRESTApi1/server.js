var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
const student = require('./student');

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))
    .get('/', (req, res, next) => {
        res.sendFile('__dirname__', '/public/index.html');
    })
    .get('/students', async (req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        let studentRecords = null;
        await student.getAllStudents()
            .then((students) => {
                studentRecords = students;
                console.log('printed from controller');
                console.log(students);
            })
            .catch((err) => {
                console.log(err);
            })
        res.send(JSON.stringify(studentRecords));
    })
    .get('students/name/:name', (req, res, next) => {

    })//this will be igonored

    .get('/students/id/:id', async (req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        const id = req.params.id;
        console.log('id ' + id);
        let searchResult = await student.getStudentById(id);
        res.send(JSON.stringify(searchResult));
        //here the student object is being converted into a json string
    })
    .get('/students/name/:name', async (req, res, next) => {
        const name = req.params.name;
        console.log('name ' + name);
        let searchResult = await student.getStudentByName(name);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(searchResult));
    })
    .post('/students', async (req, res, next) => {
        //adding a new record to the collection
        console.log('processing student data json input');
        const { name, age, marks } = req.body;
        console.log(req.body);
        const studentRecord = {
            name,
            age,
            marks,
        }
        const record = await student.addStudent(studentRecord)
        console.log(record);
        res.send(record);
    })
    .put('/students', async (req, res, next) => {
        //replacing an existing record with a new value
        //this will be like your edit function in CRUD operations
        console.log('processing student data json input');
        const { id, name, age, marks } = req.body;
        console.log(req.body);
        let count = await student.updateStudent({
            id,
            name,
            age,
            marks,
        })
        res.send(`<h1>${count} record(s) updated</h1>`);
    })
    .delete('/students/id/:id', async (req, res, next) => {
        const id = req.params.id;
        console.log('id ' + id);
        let count = await student.deleteStudent(id);
        console.log(count + ' record(0) deleted');
        res.setHeader('Content-Type', 'application/json');
        res.send(`<h1>${count} record(s) deleted</h1>`);
    })
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })