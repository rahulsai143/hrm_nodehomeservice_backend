const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = mongoose.model('countriesModel', new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  countryNames : {
    type: Map,
    of: String,
    default: {}
  },
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'countries');