const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  phoneNumbersServiceFactory = require('../service/phoneNumbersServiceFactory');

router.get('/',async (req,res) => {
  try {
    phoneNumbersDTO = await ( await phoneNumbersServiceFactory.fetchPhoneNumbersService()).listPhoneNumbers(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{phoneNumbersDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in downloadTypesEndpoint file in listDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;