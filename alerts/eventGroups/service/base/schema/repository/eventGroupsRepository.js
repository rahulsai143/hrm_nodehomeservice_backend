const eventGroupsSchema = require('../eventGroupsSchema'),
  configurationRepository = require('../../../../../../framework/infra/configurations/schema/repository/configurationRepository'),
  handleBarsMethods = require('../../../../../../initialConfigurations/globalInstances/handleBars/handleBarsMethods'),
  eventGroupsQueries = require('./eventGroupsQueries');

const listEventGroups = async () => {
  const configValue = await configurationRepository.findByCodeAndType('eventGroupsListEventGroups', 'alertsQueries')?.value;

  return (await eventGroupsSchema.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : eventGroupsQueries.listEventGroups(asyncLocalStorage.asyncLocalStorageInstance.getStore('locale'))
  ))?.[0] || eventGroupsQueries.eventGroupsDefault;
  
};

const listEvents = async () => {
  const configValue = await configurationRepository.findByCodeAndType('eventGroupsListEvents', 'alertsQueries')?.value;

  return (await eventGroupsSchema.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : eventGroupsQueries.listEvents(asyncLocalStorage.asyncLocalStorageInstance.getStore('locale'))
  ))?.[0] || eventGroupsQueries.eventsDefault;
  
};

const listMessageTemplates = async () => {
  const configValue = await configurationRepository.findByCodeAndType('eventGroupsListMessageTemplates', 'alertsQueries')?.value;

  return (await eventGroupsSchema.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : eventGroupsQueries.listMessageTemplates(asyncLocalStorage.asyncLocalStorageInstance.getStore('locale'))
  ))?.[0] || eventGroupsQueries.messageTemplatesDefault;
  
};

const readMessageTemplate = async () => {
  const configValue = await configurationRepository.findByCodeAndType('eventGroupsReadMessageTemplate', 'alertsQueries')?.value;

  return (await eventGroupsSchema.aggregate(
    configValue 
      ? await handleBarsMethods.queryParametersReplace(configValue, {locale : asyncLocalStorage.asyncLocalStorageInstance.getStore('locale')}) 
      : eventGroupsQueries.readMessageTemplate(asyncLocalStorage.asyncLocalStorageInstance.getStore('locale'))
  )) ?? eventGroupsQueries.messageTemplateDefault;
  
};

module.exports = {listEventGroups,listEvents,listMessageTemplates,readMessageTemplate};