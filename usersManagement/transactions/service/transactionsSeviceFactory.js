const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchTransactionsService = async () => {
  const config = await configurationRepository.findByCode('transactionsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'transactionsService.js')));
};

module.exports = {fetchTransactionsService};