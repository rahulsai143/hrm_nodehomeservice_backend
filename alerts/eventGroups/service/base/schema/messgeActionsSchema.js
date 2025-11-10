const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = new mongoose.Schema({
  code : String,
  name : String,
  key : String,
  urlTemplate : String,
  urlText : String,
  loginRequired : Boolean,
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
});