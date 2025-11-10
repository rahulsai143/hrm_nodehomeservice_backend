const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchDeviceAccessibilityTransactionsMappingsService = async () => {
  const config = await configurationRepository.findByCode('deviceAccessibilityTransactionsMappingsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'deviceAccessibilityTransactionsMappingsService.js')));
};

module.exports = {fetchDeviceAccessibilityTransactionsMappingsService};