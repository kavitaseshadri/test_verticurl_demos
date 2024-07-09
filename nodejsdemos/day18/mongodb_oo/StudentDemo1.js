//Perform insert, update, delete, select on Student collection
//but using the Student class
async function run() {
    let name = 'Jack';
    let age = 25;
    let marks = [98, 78, 76, 87, 57];

    const Student = require('./Student.js');
    const studentObject = new Student(name, age, marks);
    console.log(studentObject);
    studentObject.save();
    console.log(studentObject);
    console.log('student object saved!!');
}
run().catch(console.dir);
