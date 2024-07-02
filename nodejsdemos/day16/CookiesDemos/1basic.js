var express = require('express');

var app = express()
    .use((req, res) => {
        res.cookie('name', 'foo');
        res.cookie('Cartoon', 'Tom&Jerry');
        res.cookie('Winner', 'Uncle Scrooge');
        res.end('hello cookies!!!');
    }).listen(3500, () => {
        console.log('listening on port 3500');
    })

//cookies are objects of the kind text that are stored on client's computer.
//a cookie created by one application cannot be accessed by another
//we can use cookies for session management, but if the user deletes a cookie, then we can no longer depend on it

