const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  dndPreferencesServiceFactory = require('../service/dndPreferencesServiceFactory');

router.get('/',async (req,res) => {
  try {
    dndPreferencesDTO = await ( await dndPreferencesServiceFactory.fetchdndPreferencesService()).readdndPreferences(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{dndPreferencesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in dndPreferencesEndpoint file in readdndPreferences method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;