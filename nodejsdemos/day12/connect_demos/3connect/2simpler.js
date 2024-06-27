var connect = require('connect');
//create a connect dispatched and register with http

var app = connect()
    .listen(3500);
console.log('server is running on port 3500');
