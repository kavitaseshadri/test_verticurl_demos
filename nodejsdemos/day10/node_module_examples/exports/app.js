var { a, b, test } = require('./foo1');
//object de-structuring
a();
b();
console.log(test);

var foo2 = require('./foo2');
foo2.a();
foo2.b();

var foo3 = require('./foo3');
foo3.a();
foo3.b();


