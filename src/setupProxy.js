const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/login', { target: 'http://localhost:3001/' }));
  app.use(proxy('/customer', { target: 'http://localhost:3001/' }));
  app.use(proxy('/owner/', { target: 'http://localhost:3001/' }));
  app.use(proxy('/property/', { target: 'http://localhost:3001/' }));
};