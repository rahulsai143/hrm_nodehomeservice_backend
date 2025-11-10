const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  tokenCode : String,
  accessTokenExpiryTime : Date,
  isRefreshTokenEnabled : Boolean,
  refreshTokenExpiryTime : Date
});