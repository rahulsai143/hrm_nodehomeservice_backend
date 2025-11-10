const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  destinationPreferencesServiceFactory = require('../service/destinationPreferencesServiceFactory');

router.get('/',async (req,res) => {
  try {
    destinationPreferencesDTO = await ( await destinationPreferencesServiceFactory.fetchDestinationPreferencesService()).readDestinationPreferences(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{destinationPreferencesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in destinationPreferencesEndpoint file in readDestinationPreferences method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;