const path = require('path'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchUsersAdapter = async () => {
  const config = await configurationRepository.findByCode('commonDownloadTypesAdapter');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'downloadTypesAdapter.js')));
};

module.exports = {fetchUsersAdapter};