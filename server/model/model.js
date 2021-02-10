//mongodb scheme
const mongoose =require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type:String,
    require: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  gender: {
    type: String,
    status: String
  }
})

const clientDB = mongoose.model('clientdb', schema);

module.exports =clientDB