var proto = module.exports = function() {
  function router(req, res, next) {
    router.handle(req, res, next);
  }

  // mixin Router class functions
  router.__proto__ = proto;
  router.stack = [];

  return router;
};

proto.handle = function() {

}

proto.use = function(fn) {
  var offset = 0;
  var path = '/';

  if (typeof fn !== 'function') {
    offset = 1;
    path = fn;
  }

  var layer = new Layer(path, {
    sensitive: this.caseSensitive,
    strict: false,
    end: false
  }, fn);

  layer.route = undefined;

  this.stack.push(layer);

  return this;
}

