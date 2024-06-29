const express = require('express');
const router = express.Router();
var admin = require('../controller/admin')

router
    .get('/login', (req, res, next) => {
        res.sendFile('__dirname__' + '/public/loginAdmin.html');
    })
    .get('/register', (req, res, next) => {
        res.sendFile('__dirname__' + '/public/registerAdmin.html');
    })
    .post('/login', admin.login)
    .post('/logout', admin.logout)
    .get('/getProducts', admin.getProducts)
    .post('/addProduct', admin.addProduct)
    .post('/updateProduct', admin.updateProduct)
    .post('/deleteProduct', admin.deleteProduct)

module.exports = router;