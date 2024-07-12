const express = require('express');
const router = express.Router();
const studentController = require('../controller/student1');
const { addStudentView } = require('../view/addStudentView');
//we are destructuring a function from file

router
    .get('/', (req, res, next) => {
        res.sendFile('__dirname__', '/public/index.html');
    })
    // .get('/students', studentController.getAllStudents)
    // .get('students/name/:name', studentController.getStudentByName)
    // .get('/students/id/:id', studentController.getStudentById)
    // .post('/students', studentController.addStudent)
    // .put('/students', studentController.updateStudent)
    // .delete('/students/id/:id', studentController.deleteStudent)
    .get('/addStudent', (req, res, next) => {
        console.log('addStudent called');
        console.log(req.method);
        //res.send(`<h1>Hello There!!</h1>`)
        console.log(addStudentView());
        res.send(addStudentView())
        // res.send(`<html>
        //     <form method="post" class="flex_v">
        //      <input type="text" placeholder="Student Name" />
        //      <input type="text" placeholder="Student Age" />
        //      <input type="text" placeholder="Marks1" />
        //      <input type="text" placeholder="Marks2" />
        //      <input type="text" placeholder="Marks3" />
        //      <input type="text" placeholder="Marks4" />
        //      <input type="text" placeholder="Marks5" />
        //      <button type="submit">Submit</button>
        //  </form>
        //  <html>`)
    })
// .post('/addStudent',)
// .get('/getAllStudents',)


module.exports = router;