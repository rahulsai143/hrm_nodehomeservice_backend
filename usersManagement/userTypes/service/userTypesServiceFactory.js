const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchUserTypesService = async () => {
  const config = await configurationRepository.findByCode('userTypesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'userTypesService.js')));
};

module.exports = {fetchUserTypesService};