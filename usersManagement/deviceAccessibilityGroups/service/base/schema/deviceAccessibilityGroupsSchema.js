const mongoose = require("mongoose"),
  creationDetailSchema = require("../../../commonSchema/creationDetailSchema"),
  updationDetailSchema = require("../../../commonSchema/updationDetailSchema");

module.exports = new mongoose.Schema({
  name : String,
  description : String,
  deviceAccessibilities : [String],
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
});