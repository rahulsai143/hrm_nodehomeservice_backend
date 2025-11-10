const mongoose = require("mongoose"),
  creationDetailSchema = require("../../../commonSchema/base/creationDetailSchema"),
  updationDetailSchema = require("../../../commonSchema/base/updationDetailSchema");

module.exports = mongoose.model('configurationModel', new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  type: String,
  description: String,
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), 'configurations');
