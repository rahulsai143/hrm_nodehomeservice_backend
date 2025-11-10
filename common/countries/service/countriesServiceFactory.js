const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchCountriesService = async () => {
  const config = await configurationRepository.findByCode('countriesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'countriesService.js')));
};

module.exports = {fetchCountriesService};