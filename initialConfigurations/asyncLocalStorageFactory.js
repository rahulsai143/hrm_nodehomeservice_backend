const path = require('path'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const fetchAsyncLocalStorage = async () => {
  const config = await configurationRepository.findByCode('asyncLocalStorageFile');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'asyncLocalStorageInitialization.js')));
};

module.exports = {fetchAsyncLocalStorage};