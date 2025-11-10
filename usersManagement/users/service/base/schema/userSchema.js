const mongoose = require("mongoose"),
  userType = require("../../../../../framework/enumeration/base/userType"),
  personalInformationSchema = require("./personalInformationSchema"),
  contactDetailSchema = require("./contactDetailSchema"),
  userEntitySchema = require("./userEntitySchema"),
  creationDetailSchema = require("../../../../framework/commonSchema/creationDetailSchema"),
  updationDetailSchema = require("../../../../framework/commonSchema/updationDetailSchema");

module.exports = new mongoose.Schema({
  userType : {
    type : String,
    enum : Object.values(userType),
    required : true
  },
  userName: {
    type : String,
    required : true,
    unique : true
  },
  personalInformation : personalInformationSchema,
  contactDetail: contactDetailSchema,
  globalEntity : userEntitySchema,
  accessibleEntities: [userEntitySchema],
  isEmailIDVerified: Boolean,
  isMobileNumberVerified: Boolean,
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
});