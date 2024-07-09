const student = require('./student');

let studentId1 = null;
let studentName1 = '';
let studentId2 = '';
let studentName2 = '';

console.log('fetching all records from the student table');
student.getAllStudents()
    .then((students) => {
        console.log(students);
    })
    .catch((err) => {
        console.log(err);
    })
//any DB operation will always take time to fetch data

const s1 = {
    name: 'Superman',
    age: 30,
    marks: [96, 97, 95, 85, 76],
}

console.log('adding a new student record')
student.addStudent(s1)
    .then((studentId) => {
        studentId1 = studentId;
        console.log('student Id ' + studentId);
    })
    .catch((err) => {
        console.log(err);
    })

console.log('s1');
console.log(s1);


console.log('getting student by name:Spiderman')
student.getStudentByName(s1.name)
    .then((studentRecord) => {
        console.log('studentRecord in getStudentByName');
        console.log(studentRecord);
    })
    .catch((err) => {
        console.log(err);
    })


console.log('getting student by ID')
student.getStudentById(s1._id)
    .then((studentRecord) => {
        console.log('studentRecord in getStudentByID');
        console.log(studentRecord);
    })
    .catch((err) => {
        console.log(err);
    })

// console.log('deleting one Spiderman')
// student.deleteStudent(studentId1)
//     .then((count) => {
//         console.log('student Id ' + studentId1);
//         console.log('Records Deleted  ' + count);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// console.log('updating Spiderman')
// student.updateStudent(studentId1)
//     .then((count) => {
//         console.log('student Id ' + studentId1);
//         console.log('Records Deleted  ' + count);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

console.log('fetching all records from the student table');
student.getAllStudents()
    .then((students) => {
        console.log(students);
    })
    .catch((err) => {
        console.log(err);
    })