// const routes = require("express").Router();
// const { data } = require("./data");
// routes.get("/blog", data);

// module.exports = { routes };
const Blogdata = require("./routingController");
console.log(Blogdata);
const routes = require("express").Router();
routes.get("/blog", Blogdata);

module.exports = routes;
