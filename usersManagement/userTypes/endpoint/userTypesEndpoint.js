const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  userTypesServiceFactory = require('../service/userTypesServiceFactory');

router.get('/',async (req,res) => {
  try {
    downloadTypesDTO = await ( await userTypesServiceFactory.fetchUserTypesService()).listDownloadTypes(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{downloadTypesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in downloadTypesEndpoint file in listDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;