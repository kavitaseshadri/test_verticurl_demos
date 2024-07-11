//I'm going to make use of the Mongoose ODM
//Object Document Mapping
//When you want to work with a fixed schema
//When you want all your documents to have the same number of fields
//then you will switch from the native MongoDB driver to Mongoose ODM

//add a schema definition for student
//and export a Model called Student like we did for Product
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    marks: {
        type: [Number],
        required: true,
    },
    totalMarks: {
        type: Number,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
    division: {
        type: String,
        required: true,
    }
})
//The schema definition is being passed to the the Schema 
//object from Mongoose Framework as an object literal

module.exports = mongoose.model('Student', studentSchema);

//what we are exporting is a model
