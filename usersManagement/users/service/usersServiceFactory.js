const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchUsersService = async () => {
  const config = await configurationRepository.findByCode('usersService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'usersService.js')));
};

module.exports = {fetchUsersService};