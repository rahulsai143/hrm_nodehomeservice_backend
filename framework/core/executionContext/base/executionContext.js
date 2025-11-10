const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const generateExecutionContext = async() => {
  uuidv4();
};

const generateRandom = () => {
  return crypto.randomBytes(48).toString('base64');
};

module.exports = {
  generateExecutionContext,
  generateRandom
};