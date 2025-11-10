const mongoose = require("mongoose"),
  phoneNumberSchema = require("../../../../../framework/commonSchema/dataType/base/phoneNumberSchema"),
  addressSchema = require("./addressSchema");

module.exports = new mongoose.Schema({
  emailID: String,
  alternateEmailID: String,
  mobileNumber: phoneNumberSchema,
  alternateMobileNumber: phoneNumberSchema,
  landline: String,
  address : addressSchema
});

