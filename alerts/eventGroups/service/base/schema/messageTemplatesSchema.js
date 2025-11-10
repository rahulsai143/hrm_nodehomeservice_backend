const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = new mongoose.Schema({
  name : String,
  description : String,
  title : String,
  content : String,
  destinationCodes : [String],
  eventCode : String,
  locale : String,
  entityCode : String,
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
});