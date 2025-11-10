const mongoose = require("mongoose"),
  creationDetailSchema = require("../../../commonSchema/base/creationDetailSchema"),
  updationDetailSchema = require("../../../commonSchema/base/updationDetailSchema");

module.exports = mongoose.model('responseCodesModel', new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  code: { 
    type: String, 
    required: true, 
    unique: true 
  },
  localeMessages : {
    type: Map,
    of: String,
    default: {}
  },
  localeStatuses : {
    type: Map,
    of: String,
    default: {}
  },
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'responseCodes');
