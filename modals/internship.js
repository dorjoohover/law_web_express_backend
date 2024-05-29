const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  cv: {
    type: String,
  },
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
  date: {
    type: Date, 
    default: Date.now()
  }
});

module.exports = mongoose.model("Internships", internshipSchema);
