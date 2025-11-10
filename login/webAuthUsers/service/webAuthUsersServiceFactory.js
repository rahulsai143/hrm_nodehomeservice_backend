const path = require('path'),
    configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchWebAuthUsersService = async () => {
  const config = await configurationRepository.findByCode('webAuthUsersService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'webAuthUsersService.js')));
};

module.exports = {fetchWebAuthUsersService};