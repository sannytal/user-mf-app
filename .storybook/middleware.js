const proxy = require('http-proxy-middleware')
const setupProxy = require('../src/setupProxy');
module.exports = function expressMiddleware (router) {
    setupProxy(router);
}