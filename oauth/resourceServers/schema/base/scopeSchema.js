const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  scopeCode : String,
  tokenDescription : String
});