const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // imageUrl: {
    //     type: String,
    //     required: true,
    // },
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    // }
})
//The schema definition is being passed to the the Schema object from Mongoose Framework
//as an object literal

module.exports = mongoose.model('Product', productSchema);

//what we are exporting is a model
