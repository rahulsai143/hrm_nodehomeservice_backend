const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  clientCode : String,
  clientDescription : String,
  identityCode : String,
  clientSecret : String,
  clientTypeCode : String,
  grantTypeCode : String,
  routingMethod : String,
  redirectUrls : [String],
  scopesCode: [String],
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});