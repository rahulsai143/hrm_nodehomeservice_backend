const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchEventGroupsService = async () => {
  const config = await configurationRepository.findByCode('eventGroupsService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'eventGroupsService.js')));
};

module.exports = { fetchEventGroupsService };