var foo = require('./foo');
console.log('initial value of something in app.js is ' + foo.something);

//now let's modify foo.something in this file
foo.something = 456;
console.log('foo.something in app.js ' + foo.something);
//what value of something will be printed? 456?

//now load bar:
var bas = require('./bar');
//console.log('bas.something in app.js '+bas.something);
//what value of something will be printed? 456?

