const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  tokenCode : String,
  tokenName : String,
  locale : String
});