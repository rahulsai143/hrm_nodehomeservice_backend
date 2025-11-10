const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema");

module.exports = new mongoose.Schema({
  salt : String,
  createdBy : creationDetailsSchema
});