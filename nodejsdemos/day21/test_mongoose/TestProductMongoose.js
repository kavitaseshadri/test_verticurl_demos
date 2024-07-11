const mongoose = require('mongoose');
const Product = require('./model/productschema')
// . mean look in the same folder where I currently am
//.. means go the my parent folder and look there

mongoose
    .connect("mongodb://127.0.0.1/mixedDB")
    .then(result => {
        console.log('db connected')
    })
    .catch(error => {
        console.log('db connect failed!!');
        console.log(error)
    });

//how to create and save a product using mongoose
const product1 = new Product({
    title: 'Book',
    price: '499',
    description: 'A very good book!!',
})

console.log(product1);

product1.save()
    .then(result => {
        console.log('Product Created!!!')
        console.log(result);
    })
    .catch(error => {
        console.log('error in object saving');
        console.log(error);
    })