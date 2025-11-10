const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  identityDomainCode : String,
  identityDomainDescription : String,
  identityStoreCode : String,
  consentPageUrl : String,
  errorPageUrl : String,
  tokensDetails : [tokenSettingsSchema],
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});