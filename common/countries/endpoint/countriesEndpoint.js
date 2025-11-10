const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  countriesServiceFactory = require('../service/countriesServiceFactory');

router.get('/',async (req,res) => {
  try {
    countriesDTO = await ( await countriesServiceFactory.fetchCountriesService()).listCountries(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{countriesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in countriesEndpoint file in listCountries method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;