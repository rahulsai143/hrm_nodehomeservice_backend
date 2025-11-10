const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchRoleTransactionsMappingsService = async () => {
  const config = await configurationRepository.findByCode('roleTransactionsMappingsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'roleTransactionsMappingsService.js')));
};

module.exports = {fetchRoleTransactionsMappingsService};