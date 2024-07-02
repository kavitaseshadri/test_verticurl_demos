var express = require('express');
var cookieSession = require('cookie-session');

var app = express()
    .use(cookieSession({
        keys: ['my super secret sign key for my cookies']
    }))
    .use('/home', (req, res) => {
        if (req.session.views) {
            req.session.views++;
            //a session id is created and returned as a cookie
            //a copy of the sesssion id is also kept on the server
            //when the client makes a request for the first time a session id is generated
            //this generated session id is sent back a cookie to the client
            //next time the client makes a request, it will send back this cookie to the server
            //all the session attributes are now created and attached to this session id
            //and stored on the server
            //only the session id travels back and forth between the client and the server
        } else {
            req.session.views = 1;
        }
        res.end('Total views for you ' + req.session.views);
    })
    .use('/reset', (req, res) => {
        delete req.session.views;
        res.send('Cleared all your views!');
    })
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })
//view is a session attribute
//but it's being created and maintained on the server
//when you call /home for the first time it gets created
//if you call reset then view is deleted on the server
