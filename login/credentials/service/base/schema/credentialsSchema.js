const mongoose = require("mongoose");
const creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema");
const updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  username : String,
  password : String,
  lastUpdatedDate : Date,
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});