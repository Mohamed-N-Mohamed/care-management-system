const clientDB = require("../model/model");

//create new client and save
exports.create = (req, res) => {
  //validate
  if (!req.body) {
    res.status(400).send({ message: "Fields cannot be empty" });
    return;
  }

  //if fields have been typed
  const client = new clientDB({
    name: req.body.name,
    last: req.body.last,
    age: req.body.age,
    address: req.body.address,
    medication: req.body.medication,
    carer: req.body.carer,
  });

  //save in database
  client
    .save(client)
    .then((data) => {
      res.redirect("/add");
    })
    //err
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error did not save in the database",
      });
    });
};

//get all clients from database or a single client
exports.find = (req, res) => {
  //query for a single client
  if (req.query.id) {
    const id = req.query.id;
    clientDB
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Client was not found with id ${id}`,
          });
        } else {
          res.send(data);
        }
      })

      .catch((err) => {
        res.status(500).send({
          message: err.message || `Error finding client with id ${id}`,
        });
      });
  } else {
    clientDB
      .find()
      .then((client) => {
        res.send(client);
      })

      //err
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error did not find in the database",
        });
      });
  }
};

//update new client by ID
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Fields cannot be empty" });
    return;
  }

  const id = req.params.id;
  clientDB
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({
            message:
              "Cannot Update user with the same ID or client does not exist ",
          });
      } else {
        res.send(data);
      }
    })

    //error
    .catch((err) => {
      res.status(500).send({ message: "Error update client information" });
    });
};

//delete client from database
exports.delete = (req, res) => {
  const id = req.params.id;
  clientDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "Cannot delete client, check if the id is right" });
      } else {
        res.send({
          message: "Client was deleted successfully",
        });
      }
    })

    //error
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete user with id ${id}`,
      });
    });
};
