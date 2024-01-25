const data = require("./data");

const Blogdata = (req, res) => {
  res.send(data);
};

module.exports = Blogdata;
