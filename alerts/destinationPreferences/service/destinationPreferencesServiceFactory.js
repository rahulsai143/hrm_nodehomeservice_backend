const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchDestinationPreferencesService = async () => {
  const config = await configurationRepository.findByCode('destinationPreferencesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'destinationPreferencesService.js')));
};

module.exports = {fetchDestinationPreferencesService};