const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  code : String,
  name : String,
  locale : String
});