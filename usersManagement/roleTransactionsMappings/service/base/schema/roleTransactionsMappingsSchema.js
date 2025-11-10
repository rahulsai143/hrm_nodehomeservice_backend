const mongoose = require("mongoose"),
  creationDetailSchema = require('../../../../../framework/commonSchema/base/creationDetailSchema'),
  updationDetailSchema = require('../../../../../framework/commonSchema/base/updationDetailSchema');

module.exports = mongoose.model('roleTransactionsMappingsModel', new mongoose.Schema({
  roleId: String,
  transactions: [String],
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'roleTransactionsMappings');