const countriesModel = require('../countriesSchema'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository'),
  asyncLocalStorage = require('../../../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage'),
  handleBarsMethods = require('../../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  countriesDefault = require('./countriesDefault'),
  countriesQueries = require('./countriesQueries');

const listDownloadTypes = async () => {
  const configValue = await configurationRepository.findByCodeAndType('listCountries', 'commonQueries')?.value;

  return (await countriesModel.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : countriesQueries.listCountries(asyncLocalStorage.asyncLocalStorageInstance.getStore().get('locale'))
  ))?.[0] || countriesDefault;
  
};

module.exports = {listCountries};