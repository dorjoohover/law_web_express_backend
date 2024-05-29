const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  reason: {
    type: String,
  },
  date: {
    type: Date, 
    default: Date.now()
  }
});

module.exports = mongoose.model("Requests", requestSchema);
