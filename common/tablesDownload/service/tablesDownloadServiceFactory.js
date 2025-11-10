const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchTablesDownloadService = async () => {
  const config = await configurationRepository.findByCode('tablesDownloadService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'tablesDownloadService.js')));
};

module.exports = {fetchTablesDownloadService};