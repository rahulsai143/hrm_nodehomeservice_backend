const path = require('path'),
  configurationRepository = require('../../../infra/configurations/schema/repository/configurationRepository');

const fetchJwtTokenContext = async () => {
  const config = await configurationRepository.findByCode('jwtToken');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'jwtToken.js')));
};

module.exports = {fetchJwtTokenContext};