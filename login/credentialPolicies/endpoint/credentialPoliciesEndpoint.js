const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  credentialsPolicyServiceFactory = require('../service/credentialsPolicyServiceFactory');

router.get('/',async (req,res) => {
  try {
    credentialsPolicyDTO = await ( await credentialsPolicyServiceFactory.fetchCredentialsPolicyService()).listCredentialsPolicy(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{credentialsPolicyDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsPolicyEndpoint file in listCredentialsPolicy method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    credentialsPolicyDTO = await ( await credentialsPolicyServiceFactory.fetchCredentialsPolicyService()).createCredentialsPolicy(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{credentialsPolicyDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsPolicyEndpoint file in createCredentialsPolicy method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:credentialsPolicyCode',async (req,res) => {
  try {
    credentialsPolicyDTO = await ( await credentialsPolicyServiceFactory.fetchCredentialsPolicyService()).updateCredentialsPolicy(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{credentialsPolicyDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsPolicyEndpoint file in updateCredentialsPolicy method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:credentialsPolicyCode',async (req,res) => {
  try {
    credentialsPolicyDTO = await ( await credentialsPolicyServiceFactory.fetchCredentialsPolicyService()).deleteCredentialsPolicy(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{credentialsPolicyDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in credentialsPolicyEndpoint file in deleteCredentialsPolicy method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;