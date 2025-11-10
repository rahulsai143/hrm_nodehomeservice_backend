const eventGroupsRepository = require('./schema/repository/eventGroupsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listEventGroups = async(session,eventGroupsRequestDTO) => {
  let eventGroupsDTO;
  try {
    eventGroupsDTO =  await eventGroupsRepository.listEventGroups();
  } catch(exception){
    logger.loggerInstance.error('Error in listEventGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return eventGroupsDTO;
};

const listEvents = async(session,eventsRequestDTO) => {
  let eventsDTO;
  try {
    eventsDTO =  await eventGroupsRepository.listEvents();
  } catch(exception){
    logger.loggerInstance.error('Error in listEvents method', { errorMessage: exception.message, stack: exception.stack });
  }
  return eventsDTO;
};

const listMessageTemplates = async(session,messageTemplatesRequestDTO) => {
  let messageTemplatesDTO;
  try {
    messageTemplatesDTO =  await eventGroupsRepository.listMessageTemplates();
  } catch(exception){
    logger.loggerInstance.error('Error in listMessageTemplates method', { errorMessage: exception.message, stack: exception.stack });
  }
  return messageTemplatesDTO;
};

const readMessageTemplate = async(session,messageTemplateRequestDTO) => {
  let messageTemplateDTO;
  try {
    messageTemplateDTO =  await eventGroupsRepository.readMessageTemplate();
  } catch(exception){
    logger.loggerInstance.error('Error in readMessageTemplate method', { errorMessage: exception.message, stack: exception.stack });
  }
  return messageTemplateDTO;
};

module.exports = {listEventGroups,listEvents,listMessageTemplates,readMessageTemplate};