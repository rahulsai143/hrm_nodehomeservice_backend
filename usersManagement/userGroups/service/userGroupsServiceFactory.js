const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchUserGroupsService = async () => {
  const config = await configurationRepository.findByCode('userGroupsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'userGroupsService.js')));
};

module.exports = {fetchUserGroupsService};