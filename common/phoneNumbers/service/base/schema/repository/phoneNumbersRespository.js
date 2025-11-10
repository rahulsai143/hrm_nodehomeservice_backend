const phoneNumbersModel = require('../phoneNumbersSchema'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository'),
  asyncLocalStorage = require('../../../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage'),
  handleBarsMethods = require('../../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  phoneNumbersDefault = require('./phoneNumbersDefault'),
  phoneNumbersQueries = require('./phoneNumbersQueries');

const listPhoneNumbers = async () => {
  const configValue = await configurationRepository.findByCodeAndType('listPhoneNumbers', 'commonQueries')?.value;

  return (await phoneNumbersModel.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : phoneNumbersQueries.listCountries(asyncLocalStorage.asyncLocalStorageInstance.getStore().get('locale'))
  ))?.[0] || phoneNumbersDefault;
  
};

module.exports = {listPhoneNumbers};