const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchCredentialsService = async () => {
  const config = await configurationRepository.findByCode('credentialsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'credentialsService.js')));
};

module.exports = {fetchCredentialsService};