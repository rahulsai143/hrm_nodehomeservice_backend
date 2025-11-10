const destinationModel = require('../destinationsSchema'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository'),
  handleBarsMethods = require('../../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  destinationsDefault = require('./destinationsDefault'),
  destinationsQueries = require('./destinationsQueries');

const listDestinations = async () => {
  const configValue = await configurationRepository.findByCodeAndType('destinationsListDestinations', 'alertsQueries')?.value;

  return (await destinationModel.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : destinationsQueries.listDestinations(asyncLocalStorage.asyncLocalStorageInstance.getStore('locale'))
  ).toArray())?.[0] || destinationsDefault;
  
};

module.exports = {listDestinations};