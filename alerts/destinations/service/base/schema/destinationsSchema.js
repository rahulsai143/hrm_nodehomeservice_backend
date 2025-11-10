const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = mongoose.model("destinationModel", new mongoose.Schema({
  code : {
    type: String,
    required: true,
    unique: true  
  },
  localeNames : {
    type: Map,
    of: String,
    default: {}
  },
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
}), 'destination');
