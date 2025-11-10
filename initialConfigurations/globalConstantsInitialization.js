const globalConstants = require('./globalConstants'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const initalizeGlobalConstants = async () => {
  globalConstants.systemLocale = await configurationRepository.findByCode('systemLocale')?.value ?? 'en';
};

module.exports = {
  initalizeGlobalConstants
};