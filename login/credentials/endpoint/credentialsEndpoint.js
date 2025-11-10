const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  credentialsServiceFactory = require('../service/credentialsServiceFactory');

router.get('/',async (req,res) => {
  try {
    credentialsDTO = await ( await credentialsServiceFactory.fetchCredentialsService()).listCredentials(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{credentialsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsEndpoint file in listCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    credentialsDTO = await ( await credentialsServiceFactory.fetchCredentialsService()).createCredentials(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{credentialsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsEndpoint file in createCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:credentialsCode',async (req,res) => {
  try {
    credentialsDTO = await ( await credentialsServiceFactory.fetchCredentialsService()).updateCredentials(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{credentialsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsEndpoint file in updateCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:credentialsCode',async (req,res) => {
  try {
    credentialsDTO = await ( await credentialsServiceFactory.fetchCredentialsService()).deleteCredentials(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{credentialsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsEndpoint file in deleteCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;