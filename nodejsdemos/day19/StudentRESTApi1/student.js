//We are building the persistence layer
mongodb = require('mongodb');
const { MongoClient } = mongodb;
const uri = 'mongodb://127.0.0.1/mixedDB';
const client = new MongoClient(uri);

module.exports.getAllStudents = async () => {
    const client = new MongoClient(uri);
    try {
        const database = client.db('mixedDB');
        const students = database.collection('students');
        const studentArray = await students.find().toArray();
        console.log('printed from DB Layer');
        console.log(studentArray);
        return studentArray;
    } finally {
        await client.close();
    }
}

module.exports.getStudentByName = async (name) => {
    const client = new MongoClient(uri);
    const database = client.db('mixedDB');
    const students = database.collection('students');
    const query = { name: name };
    const student = await students.findOne(query);
    console.log('get student by name printing...');
    console.log(student);
    return student;
}

module.exports.getStudentById = async (id) => {
    const client = new MongoClient(uri);
    const database = client.db('mixedDB');
    const students = database.collection('students');
    const query = { _id: new mongodb.ObjectId(id) };
    const student = await students.findOne(query);
    console.log('get student by id printing...');
    console.log(student);
    return student;
}

module.exports.addStudent = async (student) => {
    const client = new MongoClient(uri);
    const database = client.db('mixedDB');
    const students = database.collection('students');
    try {
        const result = await students.insertOne(student);
        console.log(`a document was inserted with id +${result.insertedId}`);
        return result.insertedId;
    } finally {
        await client.close();
    }
}
module.exports.updateStudent = async (student) => {
    const client = new MongoClient(uri);
    const database = client.db('mixedDB');
    const students = database.collection('students');
    try {
        const filter = { _id: new mongodb.ObjectId(student.id) };
        const updateDocument = {
            $set: {
                name: student.name,
                age: student.age,
                price: student.marks,
            }
        }
        const result = await students.updateOne(filter, updateDocument);
        console.log(`${result.matchedCount} matching documents found, 
        ${result.modifiedCount} modified`);
        return result.modifiedCount;

    } finally {
        await client.close();
    }
}
module.exports.deleteStudent = async (id) => {
    const client = new MongoClient(uri);
    const database = client.db('mixedDB');
    const students = database.collection('students');
    const query = { _id: new mongodb.ObjectId(id) };
    try {
        const result = await students.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
        return result.deletedCount;
    } finally {
        await client.close();
    }
}