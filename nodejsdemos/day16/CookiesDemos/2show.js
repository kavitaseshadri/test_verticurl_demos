var express = require('express')

//once the server saves some cookies on the browser,
//and unless the cookies are not deleted,
//the browser will make sure to send them all back to the same server
//from where it was received
//with every new request it makes

var app = express()
    .use((req, res) => {
        console.log('--cookies received from client');
        console.log(req.headers['cookie']);
        res.cookie('secret', 'you have won a lottery!')
        res.end('Meet you soon!!');
    })
    .listen(3500, () => {
        console.log('server is running on port 3500');
    })