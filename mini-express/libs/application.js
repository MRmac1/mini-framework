var app = exports = module.exports = {};

app.init = function() {

  this.settings = {};
  this.defaultConfiguration();
}

app.defaultConfiguration = function() {
  this.set('x-powered-by', 'mini-express');
}

app.set = function(name, val) {
  this.settings[name] = val;
}

app.handle = function handle(req, res, next) {

}

app.use = function use(fn) {
  let path = '/';
  let offset = 0;

  if (typeof fn !== 'function') {
    path = arg;
    offset = 1;
  }

  this.loadRouter();

  var router = this._router;

  router.use(path, fn);

  return this;
}

app.loadRouter = function() {
  if (!this._router) {
    this._router = new Router();
  }
}

app.listen = function(port = process.env.PORT) {
  const server = http.createServer(this);
  server.listen(port || 3000);
}

