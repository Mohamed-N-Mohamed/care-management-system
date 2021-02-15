//express
const express = require("express");
//route
const route = express.Router();

//countroller
const controller = require('../controller/controller')

//services
const services = require("../services/render");

route.get("/", services.homeRoute);

route.get("/add", services.addClient);

route.get("/update", services.updateClient);


//create
route.post('/api/clients', controller.create)

//find
route.get('/api/clients', controller.find)

//update
route.put('/api/clients/:id', controller.update)

//create api route
route.delete('/api/clients/:id', controller.delete)

//delete
module.exports = route;
