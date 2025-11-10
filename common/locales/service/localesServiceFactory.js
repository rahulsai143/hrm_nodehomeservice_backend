const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchLocalesService = async () => {
  const config = await configurationRepository.findByCode('localesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'localesService.js')));
};

module.exports = {fetchLocalesService};