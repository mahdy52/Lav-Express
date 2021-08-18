const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  description_Service: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  adress: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  car_description: {
    type: String,
    required: true
  }
});
module.exports = user = mongoose.model("user", userSchema);
