var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use((req, res) => {
        console.log('cookies received ' + req.cookies);
        if (req.cookies.name) {
            console.log('Name Cookie', req.cookies.name);
            console.log('Gift name ', req.cookies.secret);
            console.log('Cookie name ', req.cookies.Cartoon);
            console.log('Winner name ', req.cookies.Winner);
        } else {
            res.cookie('new_cookie', 'Got the money!!!');
        }
        res.end('Hello user with Cookie!!!');
    })
    .listen(3500, () => {
        console.log('server is runnin on port 3500');
    })