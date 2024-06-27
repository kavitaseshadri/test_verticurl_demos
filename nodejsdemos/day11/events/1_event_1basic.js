var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

//Publish, Subscribe Model
//Generator of the Event would become the Publisher of the Event
//Someone who is interested in handling that event would become the Subscriber of that Event

//Subscribe
//Here the event is actually being handled or processed
emitter.on('foo', function (arg1, arg2) {
    console.log('Foo raised, Args ', arg1, arg2);
});

//Emit
emitter.emit('foo', { a: 123 }, { b: 456 });
//here the event gets generated?
//what is the name of the event that has occurred?
//XHR
//DOM-event wiring

