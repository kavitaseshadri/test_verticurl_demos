module.exports.login = (req, res, next) => {
    //read req headers
    //read query parameters
    //read form data
    //validation
    //authentication
    //authorization
    //session and cookie management
    console.log('/customer/login called here');
    res.send('/customer/login called here');
    //access db layer or call a component that handles db layer
    //dispatch view
}
module.exports.register = (req, res, next) => {
    console.log('/customer/register called here');
    res.send('/customer/register called here');
}
module.exports.browseProducts = function (req, res, next) {
    console.log('/customer/browseProducts called here');
    res.send('/customer/browseProducts called here');
}
module.exports.addToCart = function (req, res, next) {
    console.log('/customer/addToCart called here');
    res.send('/customer/addToCart called here');
}
module.exports.removeFromCart = function (req, res, next) {
    console.log('/customer/removeFromCart called here');
    res.send('/customer/removeFromCart called here');
}
module.exports.order = function (req, res, next) {
    console.log('/customer/order called here');
    res.send('/customer/order called here');
}
module.exports.logout = function (req, res, next) {
    console.log('/customer/logout called here');
    res.send('/customer/logout called here');
}