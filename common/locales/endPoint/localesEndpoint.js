const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  localesServiceFactory = require('../service/localesServiceFactory');

router.get('/',async (req,res) => {
  try {
    localesDTO = await ( await localesServiceFactory.fetchLocalesService()).listLocales(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{localesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in localedEndpoint in listLocales method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;