var express = require('express');
//for route processing, use method requires two things
//first argument is the url that has to be processed
//second argument is the function that will contain the lofic of what needs to be done
//when that url is invoked by the browser and passed to the server
//you call use function as many as you want
//we are not calling use function, we are only using it to map our routes to hte logic
//HttpRequest-url, GET/POST/DELETE/PUT/PATCH/OPTIONS
//req.method==GET/POST/DELETE/PUT/PATCH/OPTIONS

express()
    .use('/home', function (req, res, next) {
        res.send("<h1>Hello from Express-Home</h1>");
        //dynamically created html page
        console.log('first ' + req.url);
        next();
    })
    .use('/login', function (req, res, next) {
        if (req.method == 'GET') {
            //send back login.html
        } else if (req.method == 'POST') {
            //process the login form on submission
        }
        res.send("<h1>Hello from Express-Login</h1>");
        //dynamically created html page
        console.log('first ' + req.url);
        next();
    })
    .use(function (req, res, next) {
        res.send("<h1>other urls</h1>");
        console.log('second ' + req.url);
        next();
    })
    .listen(3500, () => {
        console.log('express server is listening on port no 3500');
    })