const path = require('path'),
  configurationRepository = require('../../../framework/infra/repository/configurationRepository');

const fetchSubscriptionsService = async () => {
  const subscriptionsService = require(path.join(__dirname, 'subscriptionsService'));
  return await subscriptionsService.fetchSubscriptionsService(configurationRepository.getConfiguration());
};

module.exports = { fetchSubscriptionsService };