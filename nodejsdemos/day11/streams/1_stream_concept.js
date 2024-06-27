var stream = require('stream');
var EventEmitter = require('events').EventEmitter;

//all stream classes in node are EventEmitter
//they are all inheriting from the EventEmitter
console.log(new stream.Stream() instanceof EventEmitter);
//true
console.log(new stream.Readable({}) instanceof stream.Stream);
//true
console.log(new stream.Writable({}) instanceof stream.Stream);
//true
console.log(new stream.Duplex({}) instanceof stream.Stream);
//true
console.log(new stream.Transform({}) instanceof stream.Stream);
//true

