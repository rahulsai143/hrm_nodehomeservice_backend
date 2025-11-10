const path = require('path'),
  configurationRepository = require('../../infra/configurations/schema/repository/configurationRepository');

const fetchExecutionContext = async () => {
  const config = await configurationRepository.findByCode('executionContext');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'executionContext.js')));
};

module.exports = {fetchExecutionContext};