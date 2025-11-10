const jwt = require('jsonwebtoken'),
  configurationRepository = require('../../../../infra/configurations/schema/repository/configurationRepository');

const generateToken = async (userId, userName, expiryTime) => {
  const secret = await configurationRepository.findByCode('jwtTokenSecret');
  return jwt.sign({ userId, userName }, secret.value, { expiresIn: expiryTime });
};

const verifyJWTToken = async () => {
  const jwtSigner = await jwtSignerFactory.fetchJwtTokenContext().getVerifier();

};

module.exports = { generateToken, verifyJWTToken };
