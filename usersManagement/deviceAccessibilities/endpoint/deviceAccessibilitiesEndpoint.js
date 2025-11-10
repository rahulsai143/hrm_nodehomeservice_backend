const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  deviceAccessibilitiesServiceFactory = require('../service/deviceAccessibilitiesServiceFactory');

router.get('/',async (req,res) => {
  try {
    deviceAccessibilitiesDTO = await ( await deviceAccessibilitiesServiceFactory.fetchDeviceAccessibilitiesService()).listDeviceAccessibilities(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilitiesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilitiesEndpoint file in listDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    deviceAccessibilitiesDTO = await ( await deviceAccessibilitiesServiceFactory.fetchDeviceAccessibilitiesService()).createDeviceAccessibilities(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{deviceAccessibilitiesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilitiesEndpoint file in createDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:deviceAccessibilityCode',async (req,res) => {
  try {
    deviceAccessibilitiesDTO = await ( await deviceAccessibilitiesServiceFactory.fetchDeviceAccessibilitiesService()).updateDeviceAccessibilities(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilitiesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilitiesEndpoint file in updateDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:deviceAccessibilityCode',async (req,res) => {
  try {
    deviceAccessibilitiesDTO = await ( await deviceAccessibilitiesServiceFactory.fetchDeviceAccessibilitiesService()).deleteDeviceAccessibilities(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilitiesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilitiesEndpoint file in deleteDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;
