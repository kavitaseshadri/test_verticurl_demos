var http = require('http');
var fs = require('fs');
//we want to serve an html static page
//for this we will have to use file api
//we will also be sending back Http Status marking this operation
//as either a success or failure
//plus we will also send some response headers
//we have request headers and response headers

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('Error 404: resource not found');
    response.end();
}

var server = http.createServer(
    function (req, res) {
        if (req.method == 'GET' && req.url == '/home') {
            //res.writeHead(200, { 'content-type': 'text/plain' });
            res.writeHead(200, { 'content-type': 'text/html' });
            console.log('response sent back');
            //piping-you want to get data from one stream and
            //then pass it on to another stream
            //stream-file, network-are both streams
            fs.createReadStream('./public/index.html').pipe(res);
            //response.write('sdfasdfasd');
            //response.write(fs.createReadStream('./ public/index.html'));
        } else {
            send404(res);
        }
    }
).listen(3500, () => {
    console.log('server is running on port 3500');
})