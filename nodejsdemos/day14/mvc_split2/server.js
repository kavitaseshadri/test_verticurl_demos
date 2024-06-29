var express = require('express')
var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
var adminRoutes = require('./routes/admin');
var customerRoutes = require('./routes/customer');

var app = express()
    .use(express.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(serveStatic(__dirname + '/public'))
    .use('/admin', adminRoutes)
    .use('/customer', customerRoutes)

app.listen(3500, () => {
    console.log('express server is running on port 3500');
})

// .get('/customer/login', () => { })
// .get('/customer/register', () => { })
// .get('/customer/browseProducts', () => { })
// .post('/customer/addToCart', () => { })
// .post('/customer/removeFromCart', () => { })
// .post('/customer/order', () => { })
// .post('/customer/logout')
// .get('/admin/login', () => { })
// .post('/admin/logout', () => { })
// .get('/admin/getProducts', () => { })
// .post('/admin/addProduct', () => { })
// .post('/admin/updateProduct', () => { })
// .post('/admin/deleteProduct', () => { })