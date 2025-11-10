const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  firstName: {
    type : String,
    required : true
  },
  middleName: {
    type : String
  },
  lastName: {
    type : String
  },
  dateOfBirth: {
    type : String,
    required : true
  }
});