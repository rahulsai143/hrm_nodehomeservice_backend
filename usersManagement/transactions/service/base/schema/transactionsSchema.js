const mongoose = require("mongoose"),
  creationDetailSchema = require("../../../commonSchema/creationDetailsSchema"),
  updationDetailSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = mongoose.model("transactionsModel", new mongoose.Schema({
  moduleId: String,
  moduleName: {
    type: Map,
    of: String,
    default: {}
  },
  services: [
    {
      serviceId: String,
      serviceName: {
        type: Map,
        of: String,
        default: {}
      }
    }
  ],
  createdBy: creationDetailSchema,
  updatedBy: [updationDetailSchema]
}), transactions);
