const mongoose = require("mongoose"),
    credentialsSchema = require("./credentialsSchema"),
    creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema"),
    updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = mongoose.model('webAuthUsersModel',  new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  userId : {
    type: String,
    required: true,
  },
credentials:[credentialsSchema],
  createdBy: creationDetailsSchema,
  updatedBy: [updationDetailsSchema],
}), 'webAuthUsers');