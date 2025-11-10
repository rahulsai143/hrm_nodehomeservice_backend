const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sequenceNo: {
    type: Number,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  sortable: {
    type: Boolean,
    default: false,
  },
  downloadable: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
});
