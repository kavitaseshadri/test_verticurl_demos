var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

//Subcribers or Handlers of the Event
emitter.on('foo', function () {
    console.log('subscriber1');
})
emitter.on('foo', function () {
    console.log('subscriber2');
})

//Emite
//Publisher or Creator or Event Source
emitter.emit('foo');
