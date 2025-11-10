const userTypesModel = require('../userTypesSchema'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository'),
  asyncLocalStorage = require('../../../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage'),
  handleBarsMethods = require('../../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  userTypesDefault = require('./userTypesDefault'),
  userTypesQueries = require('./userTypesQueries');

const listUserTypes = async () => {
  const configValue = await configurationRepository.findByCodeAndType('listUserTypes', 'usermanagementQueries')?.value;

  return (await userTypesModel.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : userTypesQueries.listUserTypes(asyncLocalStorage.asyncLocalStorageInstance.getStore().get('locale'))
  ))?.[0] || userTypesDefault;
  
};

module.exports = {listUserTypes};