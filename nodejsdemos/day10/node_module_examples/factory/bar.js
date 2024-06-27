var foo3 = require('./foo');
let something2 = foo3();
console.log('in a another module:var.js', something2);

console.log('in another module: bar.js ', foo3.something);
console.log('in another module: bar.js ', foo3().something);