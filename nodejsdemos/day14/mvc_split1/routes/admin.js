module.exports.login = function (req, res, next) {
    console.log('/admin/login called here');
    res.send('/admin/login called here')
}
module.exports.logout = function (req, res, next) {
    console.log('/admin/logout called here');
    res.send('/admin/logout called here')
}
module.exports.addProduct = function (req, res, next) {
    console.log('/admin/addProduct called here');
    res.send('/admin/addProduct called here');
}
module.exports.updateProduct = function (req, res, next) {
    console.log('/admin/updateProduct called here');
    res.send('/admin/updateProduct called here');
}
module.exports.deleteProduct = function (req, res, next) {
    console.log('/admin/deleteProduct called here');
    res.send('/admin/deleteProduct called here');
}
module.exports.getProducts = function (req, res, next) {
    console.log('/admin/getProducts called here');
    res.send('/admin/getProducts called here');
}