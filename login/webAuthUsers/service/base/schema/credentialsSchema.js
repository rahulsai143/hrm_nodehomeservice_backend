const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    id: {
      type: String,
      required: true
    },
    publicKey: {
      type: String,
      required: true
    },
    signCount: {
      type: Number,
      required: true
    },
    transports: {
      type: [String]
    },
        aaguid: {
      type: String
    },
        createdAt: {
      type: Date
    },
        lastUsedAt: {
      type: Date
    }
});