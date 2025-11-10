const path = require('path'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const fetchLogger = async () => {
  const config = await configurationRepository.findByCode('loggerFile');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'loggerInitialization.js')));
};

module.exports = {fetchLogger};