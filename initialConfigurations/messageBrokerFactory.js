const path = require('path'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const fetchMessageBroker = async () => {
  const config = await configurationRepository.findByCode('messageBrokerFile');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'messageBrokerInitialization.js')));
};

module.exports = {fetchMessageBroker};