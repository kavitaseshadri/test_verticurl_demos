var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use('/toggle', (req, res) => {
        if (req.cookies.name) {
            res.clearCookie('name');
            res.clearCookie('secret');
            res.write('name cookie cleared ' + req.cookies.name);
            res.write('secret cookie cleared ' + req.cookies.secret);
            res.end();
        } else {
            res.cookie('name', 'foo');
            res.cookie('secret', 'You have won a lotter worth $100 Million USD');
            res.end('secret cookie set!');
        }
    })
    .listen(3500, () => {
        console.log('server started on port 3500');
    })