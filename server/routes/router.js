//express
const express = require("express");
//route
const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/add", (req, res) => {
  res.render("add-client");
});

route.get("/update", (req, res) => {
  res.render("update-client");
});

//export routes
module.exports = route;
