let a1 = 101;
//if I don't export this, then it can't be accessed out this file

const someFunction = () => {
    console.log('This is some function, but nobody will see it');
}
//if I don't export this, then it can't be accessed outside this file

const obj = {
    n1: 101,
    n2: 'abc'
}
//if I don't export this, then it can't be accessed outside this file
console.log('foo.js was loaded');
console.log('a1 ' + a1);
console.log('obj ' + obj);
someFunction();

module.exports = function () {
    console.log('This is a function in this file foo');
}
//since this function has been attached to the 
//module.exports, we can access it outside this file by
//importing it
