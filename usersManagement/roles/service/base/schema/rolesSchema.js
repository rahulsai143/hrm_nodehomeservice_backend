const mongoose = require("mongoose"),
  userType = require("../../../../../framework/enumeration/base/userType"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  name : String,
  description : String,
  userType : String,
  isGlobal : Boolean,
  twoFARequired : Boolean,
  roleScopeCodes : [String],
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});