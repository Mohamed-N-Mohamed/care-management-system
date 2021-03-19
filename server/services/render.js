//use axios to get all client from database
const axios = require("axios");

exports.homeRoute = (req, res) => {
  //get client
  axios
    .get("http://localhost:3000/api/clients")
    .then((response) => {
      res.render("index", { clients: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.addClient = (req, res) => {
  res.render("add-client");
};

exports.updateClient = (req, res) => {
  //get a single client
  axios
    .get("http://localhost:3000/api/clients", { params: { id: req.query.id } })
    .then((client) => {
      res.render("update-client", { clients: client.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
