const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  subscriptionsServiceFactory = require('../service/subscriptionsServiceFactory');

router.get('/',async (req,res) => {
  try {
    subscriptionsDTO = await ( await subscriptionsServiceFactory.fetchSubscriptionsService()).readSubscriptions(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{subscriptionsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in subscriptionsEndpoint file in readSubscriptions method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    subscriptionsDTO = await ( await subscriptionsServiceFactory.fetchSubscriptionsService()).createSubscriptions(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.CREATED,{subscriptionsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in subscriptionsEndpoint file in createSubscriptions method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/',async (req,res) => {
  try {
    subscriptionsDTO = await ( await subscriptionsServiceFactory.fetchSubscriptionsService()).updateSubscriptions(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{subscriptionsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in subscriptionsEndpoint file in updateSubscriptions method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/',async (req,res) => {
  try {
    subscriptionsDTO = await ( await subscriptionsServiceFactory.fetchSubscriptionsService()).deleteSubscriptions(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{subscriptionsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in subscriptionsEndpoint file in deleteSubscriptions method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;