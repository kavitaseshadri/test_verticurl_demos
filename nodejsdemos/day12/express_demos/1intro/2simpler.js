var express = require('express');
express()
    .use(function (req, res, next) {
        res.end('hello express 2!!');
    }).listen(3500, () => {
        console.log('express is running on port 3500');
    })