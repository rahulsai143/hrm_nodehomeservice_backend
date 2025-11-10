const path = require('path'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const fetchHandleBar = async () => {
  const config = await configurationRepository.findByCode('handleBarFile');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'handleBarsInitialization.js')));
};

module.exports = {fetchHandleBar};