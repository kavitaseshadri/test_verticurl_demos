//how to handle url processing?
var connect = require('connect');
//create a dispatcher and register with http
var app = connect()
    //do we have to call it app?
    //it can be named anything
    //conventionally it is caller app
    //variable names don't matter in JS
    .use('/', function (req, res, next) {
        res.write('This response came from the middleware');
        res.end();
        next();//this is for calling the next middleware in the chain
    }).listen(3500);
console.log('server is runnin on port 3500');

//use function is introduced by the connect framework
//it helps you plug-in a middleware or several middlewares
//into your application
//think of one middle ware as one slice of logic
//in this case middleware is being used to handle http request urls
