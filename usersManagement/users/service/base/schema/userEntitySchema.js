const mongoose = require("mongoose"),
  entityCodeSchema = require("./entityCodeSchema"),
  branchCodeSchema = require("./branchCodeSchema"),
  roleCodeSchema = require("./roleCodeSchema"),
  deviceAccessibilityCodeSchema = require("./deviceAccessibilityCodeSchema");

// Question why not reference Id because when reading the user to avoid the database calls or other document calls
module.exports = new mongoose.Schema({
  entity : entityCodeSchema,
  primaryBranch : branchCodeSchema,
  accessibleBranches : [branchCodeSchema],
  roles : [roleCodeSchema],
  deviceAccessibilities : [deviceAccessibilityCodeSchema]
});
