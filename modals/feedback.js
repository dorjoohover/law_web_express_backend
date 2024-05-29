const mongoose = require("mongoose");

const feedbackSchmea = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  comment: {
    type: String,
  },
  date : {
    type: Date, 
    default: Date.now()
  }
});

module.exports = mongoose.model("Feedbacks", feedbackSchmea);
