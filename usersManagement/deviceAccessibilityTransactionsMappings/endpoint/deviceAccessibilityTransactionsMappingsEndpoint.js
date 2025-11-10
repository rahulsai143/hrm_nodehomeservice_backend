const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  deviceAccessibilityTransactionsMappingsServiceFactory = require('../service/deviceAccessibilityTransactionsMappingsServiceFactory');

router.get('/',async (req,res) => {
  let deviceAccessibilityTransactionsMappingsDTO;
  try {
    deviceAccessibilityTransactionsMappingsDTO = await ( await deviceAccessibilityTransactionsMappingsServiceFactory.fetchDeviceAccessibilityTransactionsMappingsService()).listDeviceAccessibilityTransactionsMappings(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityTransactionsMappingsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsEndpoint file in listDeviceAccessibilityTransactionsMappings method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  let deviceAccessibilityTransactionsMappingDTO;
  try {
    deviceAccessibilityTransactionsMappingDTO = await ( await deviceAccessibilityTransactionsMappingsServiceFactory.fetchDeviceAccessibilityTransactionsMappingsService()).createDeviceAccessibilityTransactionsMapping(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityTransactionsMappingDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsEndpoint file in createDeviceAccessibilityTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/',async (req,res) => {
  let deviceAccessibilityTransactionsMappingDTO;
  try {
    deviceAccessibilityTransactionsMappingDTO = await ( await deviceAccessibilityTransactionsMappingsServiceFactory.fetchDeviceAccessibilityTransactionsMappingsService()).updateDeviceAccessibilityTransactionsMapping(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityTransactionsMappingDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsEndpoint file in updateDeviceAccessibilityTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/',async (req,res) => {
  let deviceAccessibilityTransactionsMappingDTO;
  try {
    deviceAccessibilityTransactionsMappingDTO = await ( await deviceAccessibilityTransactionsMappingsServiceFactory.fetchDeviceAccessibilityTransactionsMappingsService()).deleteDeviceAccessibilityTransactionsMapping(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityTransactionsMappingDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsEndpoint file in deleteDeviceAccessibilityTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;
