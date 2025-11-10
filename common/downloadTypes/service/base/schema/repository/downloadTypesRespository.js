const downloadTypesModel = require('../downloadTypesSchema'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository'),
  asyncLocalStorage = require('../../../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage'),
  handleBarsMethods = require('../../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  downloadTypesDefault = require('./downloadTypesDefault'),
  downloadTypesQueries = require('./downloadTypesQueries');

const listDownloadTypes = async () => {
  const configValue = await configurationRepository.findByCodeAndType('listDownloadTypes', 'commonQueries')?.value;

  return (await downloadTypesModel.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : downloadTypesQueries.listDownloadTypes(asyncLocalStorage.asyncLocalStorageInstance.getStore().get('locale'))
  ))?.[0] || downloadTypesDefault;
  
};

module.exports = {listDownloadTypes};