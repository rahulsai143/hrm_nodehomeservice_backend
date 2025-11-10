const path = require('path'),
  configurationRepository = require('../../../framework/infra/configurations/schema/repository/configurationRepository');

const fetchPhoneNumbersService = async () => {
  const config = await configurationRepository.findByCode('phoneNumbersService');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'phoneNumbersService.js')));
};

module.exports = {fetchPhoneNumbersService};