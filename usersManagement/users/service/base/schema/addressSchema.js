const mongoose = require("mongoose"),
  country = require("../../../../../framework/enumeration/base/country");

module.exports = new mongoose.Schema({
  address1: String,
  address2: String,
  address3: String,
  address4: String,
  city: String,
  country: {
    type : String,
    enum : Object.values(country),
    required : true
  },
  state: String,
  pincode: String
});