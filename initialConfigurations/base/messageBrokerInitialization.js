const nats = require('nats'),
  configurationRepository = require('../../framework/infra/configurations/schema/repository/configurationRepository');

const configCode = 'messageBrokerUrl';
let messageBrokerInstance;

const initializeMessageBroker = async () => nats.connect({ servers: await configurationRepository.findByCode(configCode) || 'nats://localhost:4222' });

const createMessageBroker = async () => messageBrokerInstance || (messageBrokerInstance = await initializeMessageBroker());

module.exports = { createMessageBroker };
