const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes = require('../../../framework/infra/constants/responseCodes'),
  eventGroupsServiceFactory = require('../service/eventGroupsServiceFactory');

router.get('/', async (req, res) => {
  try {
    eventGroupsDTO = await (await eventGroupsServiceFactory.fetchEventGroupsService()).listEventGroups(req.session, req.body || {});
    responseBuilder.buildResponse(res, responseCodes.OK, { eventGroupsDTO });
  } catch (exception) {
    logger.loggerInstance.error('Error in eventGroupsEndpoint in listEventGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.get('/:eventGroupCode/events', async (req, res) => {
  try {
    eventsDTO = await (await eventGroupsServiceFactory.fetchEventGroupsService()).listEvents(req.session, req.body || {});
    responseBuilder.buildResponse(res, responseCodes.OK, { eventsDTO });
  } catch (exception) {
    logger.loggerInstance.error('Error in eventGroupsEndpoint in listEvents method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.get('/:eventGroupCode/events/:eventCode/messageTemplates', async (req, res) => {
  try {
    messageTemplatesDTO = await (await eventGroupsServiceFactory.fetchEventGroupsService()).listMessageTemplates(req.session, req.body || {});
    responseBuilder.buildResponse(res, responseCodes.OK, { messageTemplatesDTO });
  } catch (exception) {
    logger.loggerInstance.error('Error in eventGroupsEndpoint in listMessageTemplates method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.get('/:eventGroupCode/messageTemplates/:messageTemplateCode', async (req, res) => {
  try {
    messageTemplateDTO = await (await eventGroupsServiceFactory.fetchEventGroupsService()).readMessageTemplate(req.session, req.body || {});
    responseBuilder.buildResponse(res, responseCodes.OK, { messageTemplateDTO });
  } catch (exception) {
    logger.loggerInstance.error('Error in eventGroupsEndpoint in readMessageTemplate method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;