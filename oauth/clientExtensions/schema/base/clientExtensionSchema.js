const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  clientCode : String,
  organizationCode : String,
  softwareJWKSEndpoint : String,
  responseType : String,
  tokenSigningAlgorithm : String,
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});