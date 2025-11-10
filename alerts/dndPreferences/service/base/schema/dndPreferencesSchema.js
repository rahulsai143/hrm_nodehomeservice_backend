const mongoose = require("mongoose"),
  creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = mongoose.model('dndPreferencesModel', new mongoose.Schema({
  username : String,
  preferences: [String],
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
}), 'dndPreferences');