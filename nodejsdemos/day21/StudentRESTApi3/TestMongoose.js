const mongoose = require('mongoose');
const Product = require('./model/productschema');

mongoose
    .connect("mongodb://127.0.0.1:27017/mixedDB")
    .then(result => {
        console.log('connected');
    })
    .catch(error => {
        console.log('failed');
        console.log(error);
    })

const product1 = new Product({
    title: 'Book',
    price: '1.99',
    description: 'a good book!'
});

product1.save().
    then(result => {
        console.log('Product Created');
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

