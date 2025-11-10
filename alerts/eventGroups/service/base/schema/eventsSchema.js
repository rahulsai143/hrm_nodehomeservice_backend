const mongoose = require("mongoose"),
  messageTemplatesSchema = require("./messageTemplatesSchema"),
  messageAttributesSchema = require("./messageAttributesSchema"),
  messgeActionsSchema = require("./messgeActionsSchema"),
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
  eventType : String,
  messageTemplatesSchema : [messageTemplatesSchema],
  messageAttributes : [messageAttributesSchema],
  messageActions : [messgeActionsSchema],
  createdBy : creationDetailSchema,
  updatedBy : [updationDetailSchema]
});