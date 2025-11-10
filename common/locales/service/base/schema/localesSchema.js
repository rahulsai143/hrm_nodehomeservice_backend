const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = mongoose.model('localesModel', new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'locales');