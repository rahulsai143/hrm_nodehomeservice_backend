const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchDeviceAccessibilityGroupsService = async () => {
  const config = await configurationRepository.findByCode('deviceAccessibilityGroupsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'deviceAccessibilityGroupsService.js')));
};

module.exports = {fetchDeviceAccessibilityGroupsService};