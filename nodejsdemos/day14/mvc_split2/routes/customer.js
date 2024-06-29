const express = require('express');
const router = express.Router();
var customer = require('../controller/customer');

router
    .get('/login', (req, res, next) => {
        res.sendFile('__dirname__' + '/public/index.html');
    })
    .post('/login', customer.login)
    .get('/register', (req, res, next) => {
        res.sendFile('__dirname__' + '/public/register.html');
    })
    .post('/register', customer.register)
    .get('/browseProducts', customer.browseProducts)
    .post('/addToCart', customer.addToCart)
    .post('/removeFromCart', customer.removeFromCart)
    .post('/order', customer.order)
    .post('/logout', customer.logout)

module.exports = router;