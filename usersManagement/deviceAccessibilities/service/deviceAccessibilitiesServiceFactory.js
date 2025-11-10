const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchDeviceAccessibilitiesService = async () => {
  const config = await configurationRepository.findByCode('deviceAccessibilitiesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'deviceAccessibilitiesService.js')));
};

module.exports = {fetchDeviceAccessibilitiesService};