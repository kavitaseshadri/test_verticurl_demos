var a = function () {
    console.log('a called from foo1');
}
var b = function () {
    console.log('b called from foo1');
}
module.exports = {
    test: 'this is a test message',
    a,
    b,
    // a: a,
    // b: b,
    func1: a,
    func2: b,
}
