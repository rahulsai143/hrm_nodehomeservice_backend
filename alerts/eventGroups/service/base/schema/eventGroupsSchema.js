const mongoose = require("mongoose"),
  eventsSchema = require('./eventsSchema'),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');


module.exports = new mongoose.Schema({
  code : {
    type: String,
    required: true,
    unique: true  
  },
  localeNames : {
    type: Map,
    of: String,
    default: {}
      
  },
  events : [eventsSchema],
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
});