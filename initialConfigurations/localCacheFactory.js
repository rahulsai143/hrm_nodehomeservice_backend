const path = require('path'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const fetchLocalCache = async () => {
  const config = await configurationRepository.findByCode('localCacheFile');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'localCacheInitialization.js')));
};

module.exports = {fetchLocalCache};