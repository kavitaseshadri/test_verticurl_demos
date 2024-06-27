let http = require('http');
let visitors = 0;

let server = http.createServer((request, response) => {
    console.log('incoming request number ' + (++visitors));
    console.log('printing headers received from the browser');
    console.log(request.headers);
    //response
    response.write('hello client with headers');
    response.statusCode = 404;
    response.end();
}).listen(3500, () => {
    console.log('server is running on port 3500');
})
//typing an address in the address bar of the browser
//or clicking on some hyperlink
//they are both sent as GET request
