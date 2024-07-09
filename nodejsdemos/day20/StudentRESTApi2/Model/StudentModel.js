const mongodb = require('mongodb');
const getDB = require('./database').getDb;

class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
        this.totalMarks = '';
        this.percentage = '';
        this.division = '';
    }
    save() {
        //it will perform both insert and update
        const db = getDB();
        // console.log('db name');
        // console.log(db);
        let dbOp;
        if (this._id) {
            //update the product
            dbOp = db
                .collection('students')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            dbOp = db.collection('students').insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }
    static fetchAll() {
        const db = getDB();
        return db
            .collection('students')
            .find()
            .toArray()
            .then(students => {
                console.log(students);
                return students;
            })
            .catch(err => {
                console.log(err);
            })

    }
    static findById(studentID) {
        const db = getDB();
        return db
            .collection('students')
            .find({ _id: new mongodb.ObjectId(studentID) })
            .next()
            .then(student => {
                console.log(student);
                return student;
            })
            .catch(err => {
                console.log(err);
            })
    }
    static deleteById(studentID) {
        const db = getDB();
        return db
            .collection('students')
            .deleteOne({ _id: new mongodb.ObjectId(studentID) })
            .then(result => {
                console.log('Deleted')
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = Student;