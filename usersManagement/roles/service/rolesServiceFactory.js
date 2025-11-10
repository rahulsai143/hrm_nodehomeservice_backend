const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchRolesService = async () => {
  const config = await configurationRepository.findByCode('rolesService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'rolesService.js')));
};  

module.exports = {fetchRolesService};