const express = require("express");
const routes = express.Router();

const Controller = require("./Controller");

routes.get("/", (req, res) => {
  res.send("Email sender by @hyperyuri");
});

routes.post("/send", Controller.store);

module.exports = routes;
