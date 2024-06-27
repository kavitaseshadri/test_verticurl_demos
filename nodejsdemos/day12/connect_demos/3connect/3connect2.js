var connect = require('connect');
//create a dispathcer and register with http
function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('Error 404: resource not found');
    response.end();
}

var app = connect()
    //register a middleware-intercepting filter
    .use('/login', (req, res, next) => {
        if (req.method == 'GET') {
            console.log('GET method for /login route was called');
            res.write('+GET method for /login route was called');
            res.end();
        } else if (req.method == 'POST') {
            console.log('POST method for /login route was called');
            res.write('+POST method for /login route was called');
            res.end();
        } else {
            send404(res);
        }
        //next();//this is for calling the next middleware in the chain
    }).use('/register', function (req, res, next) {
        if (req.method == 'GET') {
            console.log('GET method for /register route was called');
            res.write('+GET method for /register route was called');
        } else if (req.method == 'POST') {
            console.log('POST method for /register route was called');
            res.write('+POST method for /register route was called');
        } else {
            send404(res);
        }
        res.end();
        //next();//this is for calling the next middleware in the chain
    })
    .use('/', (req, res, next) => {
        console.log('GET method for / route was called');
        res.write('+GET method for /route was called');
        res.end();
    })//this is taking care of all other urls and all the methods for it
    .listen(3500);
console.log('connect server is running on port 3500');


