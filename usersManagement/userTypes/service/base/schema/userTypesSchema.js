const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = mongoose.model('userTypesModel', new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  userTypesNames : {
    type: Map,
    of: String,
    default: {}
  },
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'userTypes');