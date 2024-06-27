var http = require('http');
var fs = ('fs');

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('Error 404: resource not found');
    response.end();
}

var server = http.createServer(
    (req, res) => {
        if (req.method == 'GET' && req.url == '/') {
            console.log('GET method for / route was called');
            res.write('GET method for / route was called');
            res.end();
        }
        else if (req.method == 'GET' && req.url == '/login') {
            console.log('GET method for /login route was called');
            res.write('GET method for /login route was called');
            res.end();
        }
        else if (req.method == 'POST' && req.url == '/login') {
            console.log('POST method for /login route was called');
            res.write('POST method for /login route was called');
            res.end();
        }
        else if (req.method == 'GET' && req.url == '/register') {
            console.log('GET method for /register route was called');
            res.write('GET method for /register route was called');
            res.end();
        }
        else if (req.method == 'POST' && req.url == '/register') {
            console.log('POST method for /register route was called');
            res.write('POST method for /register route was called');
            res.end();
        } else {
            send404(res);
        }
    }
).listen(3500, () => {
    console.log('server is running on prot 3500');
})