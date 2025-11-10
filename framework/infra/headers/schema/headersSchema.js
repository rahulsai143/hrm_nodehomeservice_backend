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
  value : {
    type: String, 
    required: true, 
  },
  type : {
    type: String, 
    required: true, 
  },
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'responseCodes');