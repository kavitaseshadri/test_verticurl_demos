var foo1 = require('./foo');
//create a new object

var obj = foo1();

//use it
console.log(obj.something);
//what will be printed here?

var foo2 = require('./foo');
console.log('initial something 1 ' + foo2().something);
//what will be printed here?

console.log('initial something 2 ' + foo2.something);

//now modofy something;

foo2.something = 456;
foo2().something = 1000;

//now load bar
var bar = require('./bar');
//now load app
var app = require('./app');
