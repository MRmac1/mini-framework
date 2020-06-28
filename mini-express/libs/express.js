/**
 * file Express 的入口文件，负责导出应用，路由等
 * 
 **/

const http = require('http');
const appliction = require('./application');
const router = require('./router')

exports = module.exports = createApplication;

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, appliction);

  return app;
}

// exports.Router = Router;

// // Router 实例
// function Router() {

//   const router = function() {

//   }

//   return router;
// }


function mixin(dest, src) {
  Object.getOwnPropertyNames(src).forEach((name) => {
    if (Object.prototype.hasOwnProperty.call(dest, name)) {
      return;
    }
    const descriptor = Object.getOwnPropertyDescriptor(src, name);
    Object.defineProperty(dest, name, descriptor);
  })
}