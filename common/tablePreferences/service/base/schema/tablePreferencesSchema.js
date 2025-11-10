const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  name : String,
  columnNumbers : [Number],
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});