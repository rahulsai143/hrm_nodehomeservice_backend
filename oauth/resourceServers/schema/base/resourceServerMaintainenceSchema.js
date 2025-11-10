const mongoose = require("mongoose"),
  resourceServerDefinitionSchema = require("./resourceServerDefinitionSchema"),
  scopeSchema = require("./scopeSchema"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  resourceServerCode : String,
  resourceServerDescription : String,
  identityDomainCode : String,
  scopes: [scopeSchema],
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});
