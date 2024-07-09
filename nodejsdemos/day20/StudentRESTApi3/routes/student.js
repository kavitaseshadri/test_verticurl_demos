const express = require('express');
const router = express.Router();
const studentController = require('../controller/student');
router
    .get('/', (req, res, next) => {
        res.sendFile('__dirname__', '/public/index.html');
    })
    .get('/students', studentController.getAllStudents)
    .get('students/name/:name', studentController.getStudentByName)
    .get('/students/id/:id', studentController.getStudentById)
    .post('/students', studentController.addStudent)
    .put('/students', studentController.updateStudent)
    .delete('/students/id/:id', studentController.deleteStudent)

module.exports = router;