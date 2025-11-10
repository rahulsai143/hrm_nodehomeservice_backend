const mongoose = require("mongoose");
const columnSchema = require("./columnSchema");
const creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema");
const updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = mongoose.model('tablesModel',  new mongoose.Schema({
  tableCode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rowCode: {
    type: String,
    required: true,
  },
  serialNumberRequired: {
    type: Boolean,
    default: false,
  },
  tableHeader: {
    type: String,
    required: true,
  },
  maxColumns : {
    required: true,
  },
  columns: [columnSchema],
  supportedDownloadTypesCodes: {
    type: [String],
    default: [],
  },
  createdBy: creationDetailsSchema,
  updatedBy: [updationDetailsSchema],
}), 'tables');