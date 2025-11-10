const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  roleTransactionsMappingsServiceFactory = require('../service/roleTransactionsMappingsServiceFactory');

router.get('/',async (req,res) => {
  try {
    roleTransactionsMappingsDTO = await ( await roleTransactionsMappingsServiceFactory.fetchRoleTransactionsMappingsService()).listRoleTransactionsMappings(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{roleTransactionsMappingsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsEndpoint file in fetchRoleTransactionsMappings method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    roleTransactionsMappingDTO = await ( await roleTransactionsMappingsServiceFactory.fetchRoleTransactionsMappingsService()).createRoleTransactionsMapping(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{roleTransactionsMappingDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsEndpoint file in createRoleTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/',async (req,res) => {
  try {
    roleTransactionsMappingDTO = await ( await roleTransactionsMappingsServiceFactory.fetchRoleTransactionsMappingsService()).updateRoleTransactionsMapping(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{roleTransactionsMappingDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsEndpoint file in updateRoleTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/',async (req,res) => {
  try {
    roleTransactionsMappingDTO = await ( await roleTransactionsMappingsServiceFactory.fetchRoleTransactionsMappingsService()).deleteRoleTransactionsMapping(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{roleTransactionsMappingDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsEndpoint file in deleteRoleTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;