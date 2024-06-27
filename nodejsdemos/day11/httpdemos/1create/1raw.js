var http = require('http');
//we want to start building web applications
//we want to create an http server first, this is equivalent to you using Apache, IIS
//the request that comes from the browser is your http request
//and the response that goes back from the web server to the browser is your http response
var server = http.createServer((request, response) => {
    console.log('request starting...');
    response.write('hello user, welcome to your first node web application');
    response.end();
});
//createServer(we pass a callback to this server function with request and response as arguements);
//we don't have to call these arguments request,response, the names don't matter!!
//now we need to start the server!!
//to start a server, we call the listen function
//listen function will ask you for a port number where the http server has to be started
server.listen(3500, () => {
    console.log('server is running on http://localhost:3500');
})
console.log('server is running on http://localhost:3500');

//to stop this server you will use ctrl+c

