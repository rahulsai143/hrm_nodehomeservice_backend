const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchService = async () => {
  const config = await configurationRepository.findByCodeAndType( 'destinationsService','alertsServices');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'destinationsService.js')));
};

module.exports = {fetchService};