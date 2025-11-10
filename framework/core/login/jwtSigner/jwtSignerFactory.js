const path = require('path'),
  configurationRepository = require('../../../infra/configurations/schema/repository/configurationRepository');

const fetchJwtSignerContext = async () => {
  const config = await configurationRepository.findByCode('jwtSigner');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'jwtSigner.js')));
};

module.exports = {fetchJwtSignerContext};