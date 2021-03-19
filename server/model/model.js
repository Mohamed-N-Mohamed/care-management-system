//mongodb scheme
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  last: {
    type: String,
    required: true
  },

  age: String,

  address: {
    type: String,
    required: true
  },

  medication: {
    type: String,
    required: true
  },

  carer: {
    type: String,
    required: true
  },
});

const clientDB = mongoose.model("clientdb", schema);

module.exports = clientDB;
