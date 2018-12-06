const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/login", { target: "http://localhost:3001/" }));
  app.use(proxy("/logout", { target: "http://localhost:3001/" }));
  app.use(proxy("/customer", { target: "http://localhost:3001/" }));
  app.use(proxy("/owner/", { target: "http://localhost:3001/" }));
  app.use(proxy("/property/", { target: "http://localhost:3001/" }));
  app.use(proxy("/agent", { target: "http://localhost:3001/" }));
  app.use(proxy("/rental", { target: "http://localhost:3001/" }));
};
