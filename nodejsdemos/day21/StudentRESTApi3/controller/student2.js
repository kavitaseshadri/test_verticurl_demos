//This controller will be implemented using mongoose
//We are building the persistence layer
//this controller was implemented using mongodb
const Student = require('../model/studentschema');

module.exports.getAllStudents = async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    let studentRecords = null;
    await Student.find()
        .then((students) => {
            studentRecords = students;
            console.log('printed from controller');
            console.log(students);
        })
        .catch((err) => {
            console.log(err);
        })
    res.send(JSON.stringify(studentRecords));
}

module.exports.getStudentByName = async (req, res, next) => {
    // const name = req.params.name;
    // console.log('name ' + name);
    // let searchResult = await studentmongodb.getStudentByName(name);
    // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify(searchResult));
}

module.exports.getStudentById = async (req, res, next) => {
    // res.setHeader('Content-Type', 'application/json');
    // const id = req.params.id;
    // console.log('id ' + id);
    // let searchResult = await studentmongodb.getStudentById(id);
    // res.send(JSON.stringify(searchResult));
    //here the student object is being converted into a json string
}

module.exports.addStudent = async (req, res, next) => {
    //adding a new record to the collection
    // console.log('processing student data json input');
    // const { name, age, marks } = req.body;
    // console.log(req.body);
    // const studentRecord = {
    //     name,
    //     age,
    //     marks,
    // }
    // const record = await studentmongodb.addStudent(studentRecord)
    // console.log(record);
    // res.send(record);
}
module.exports.updateStudent = async (req, res, next) => {
    //replacing an existing record with a new value
    //this will be like your edit function in CRUD operations
    // console.log('processing student data json input');
    // const { id, name, age, marks } = req.body;
    // console.log(req.body);
    // let count = await studentmongodb.updateStudent({
    //     id,
    //     name,
    //     age,
    //     marks,
    // })
    // res.send(`<h1>${count} record(s) updated</h1>`);
}
module.exports.deleteStudent = async (req, res, next) => {
    // const id = req.params.id;
    // console.log('id ' + id);
    // let count = await studentmongodb.deleteStudent(id);
    // console.log(count + ' record(0) deleted');
    // res.setHeader('Content-Type', 'application/json');
    // res.send(`<h1>${count} record(s) deleted</h1>`);
}