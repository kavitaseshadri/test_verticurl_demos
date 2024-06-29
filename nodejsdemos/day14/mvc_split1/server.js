//e-commerce application
//admin-backend Product Management
//customer-shop front 
//we will have a bunch of routes meant for only admin
//we will have a bunch of routes meant for only customer
//admin routes-
//Inventory Management Routes
//addProduct-get,post
//updateProduct-get,post
//deleteProduct-get,post
//getAllProducts-get,post
//dashboard

//ShopFront routes
//showProducts-get,post
//addToCart-get,post
//removeFromCart-get,post
//submitOrder-get,post
//reviewOrder-get,post

//MVC what will we do?
//RESTAPI Layer what will we do?


var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
//two more import will come here for routes import
var customer = require('./routes/customer');
var admin = require('./routes/admin');


var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + "/public"))
    //urls required by the customer
    //urls required by the admin
    .get('/customer/login', (req, res, next) => {
        res.sendFile(__dirname + '/public/index.html');
    })
    // .post('/customer/login', (req, res, next) => { })
    // .get('/customer/register', (req, res, next) => { })
    // .post('/customer/register', (req, res, next) => { })
    // .get('/customer/browseProducts', (req, res, next) => { })
    // .post('/customer/addToCart', (req, res, next) => { })
    // .post('/customer/removeFromCart', (req, res, next) => { })
    // .post('/customer/order', (req, res, next) => { })
    // .post('/customer/logout', (req, res, next) => { })
    // .get('/admin/login', (req, res, next) => { })
    // .post('/admin/logout', (req, res, next) => { })
    // .get('/admin/getProducts', (req, res, next) => { })
    // .post('/admin/addProduct', (req, res, next) => { })
    // .post('/admin/updateProduct', (req, res, next) => { })
    // .post('/admin/deleteProduct', (req, res, next) => { })
    //we need to comment the above, because we are going to do a new mapping of the routes

    .post('/customer/login', customer.login)
    .get('/customer/register', customer.register)
    .post('/customer/register', customer.register)
    .get('/customer/browseProducts', customer.browseProducts)
    .post('/customer/addToCart', customer.addToCart)
    .post('/customer/removeFromCart', customer.removeFromCart)
    .post('/customer/order', customer.order)
    .post('/customer/logout', customer.logout)

    .post('/admin/login', admin.login)
    .post('/admin/logout', admin.logout)
    .get('/admin/getProducts', admin.getProducts)
    .post('/admin/addProduct', admin.addProduct)
    .post('/admin/updateProduct', admin.updateProduct)
    .post('/admin/deleteProduct', admin.deleteProduct)

app.listen(3500, () => {
    console.log('server is running on port 3500');
})