const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchDownloadTypesService = async () => {
  const config = await configurationRepository.findByCode('downloadTypesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'downloadTypesService.js')));
};

module.exports = {fetchDownloadTypesService};