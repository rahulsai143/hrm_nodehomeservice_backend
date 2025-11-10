const path = require('path'),
  configurationRepository = require('../../../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchUsersAdapter = async () => {
  const config = await configurationRepository.findByCode('alertsUsersAdapter');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'usersServiceAdapter.js')));
};

module.exports = {fetchUsersAdapter};