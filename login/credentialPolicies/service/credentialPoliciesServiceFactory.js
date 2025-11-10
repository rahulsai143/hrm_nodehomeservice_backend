const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchCredentialsPoliciesService = async () => {
  const config = await configurationRepository.findByCode('credentialsPoliciesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'credentialsPoliciesService.js')));
};

module.exports = {fetchCredentialsPoliciesService};