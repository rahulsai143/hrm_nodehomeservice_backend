const path = require('path'),
    configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchSecurityQuestionsMaintenanceService = async () => {
  const config = await configurationRepository.findByCode('securityQuestionsMaintenanceService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'securityQuestionsMaintenanceService.js')));
};

module.exports = {fetchSecurityQuestionsMaintenanceService};