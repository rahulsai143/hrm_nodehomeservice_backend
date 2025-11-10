const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = new mongoose.Schema({
  code : String,
  name : String,
  key : String,
  path : String,
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
  
});