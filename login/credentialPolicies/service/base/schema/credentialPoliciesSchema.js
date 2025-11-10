const mongoose = require("mongoose");
const creationDetailsSchema = require("../../../commonSchema/creationDetailsSchema");
const updationDetailsSchema = require("../../../commonSchema/updationDetailsSchema");

module.exports = new mongoose.Schema({
  userType : String,
  policyName : String,
  policyDescription : String,
  passwordValidators : passwordValidators,
  createdBy : creationDetailsSchema,
  updatedBy : [updationDetailsSchema]
});

const allowedCharacterOptions =  new mongoose.Schema({
  allowed : Boolean,
  mandatory : Boolean,
  min : Number,
  max : Number
});

const passwordValidators =  new mongoose.Schema({
  passwordLength: {
    min : Number,
    max : Number
  },
  allowedCharacters : {
    upperCase : allowedCharacterOptions,
    lowerCase : allowedCharacterOptions,
    specialCharacters: allowedCharacterOptions,
    numbers : allowedCharacterOptions
  },
  allowedSpecialCharacters : [String],
  exclusionDetails : [String],
  restrictedWords : [String],
  successiveInvalidLogins : Number,
  previousPasswordsDisallowed : Number
});