const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchdndPreferencesService = async () => {
  const config = await configurationRepository.findByCode('dndPreferencesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'dndPreferencesService.js')));
};

module.exports = {fetchdndPreferencesService};