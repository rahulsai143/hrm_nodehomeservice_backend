const responseCodesModel = require('../responseSchema'),
  configurationRepository = require('../../../configurations/schema/repository/configurationRepository'),
  handleBarsMethods = require('../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  responseDefault = require('./responseDefault'),
  responseQueries = require('./responseQueries'),
  asyncLocalStorage = require('../../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage');

const findByCode = async (code) => {
  const configValue = await configurationRepository.findByCodeAndType('responseCodesFindByCode', 'frameworkQueries')?.value;
  return (await responseCodesModel.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue,{code,locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : responseQueries.responseCodesfindByCode(code,asyncLocalStorage.asyncLocalStorageInstance.getStore('locale'))
  ))?.[0] || responseDefault.find(responseCode => responseCode.code === code);
};

module.exports = {findByCode};