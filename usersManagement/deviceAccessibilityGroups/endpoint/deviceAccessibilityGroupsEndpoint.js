const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  deviceAccessibilityGroupsServiceFactory = require('../service/deviceAccessibilityGroupsServiceFactory');

router.get('/',async (req,res) => {
  try {
    deviceAccessibilityGroupsDTO = await ( await deviceAccessibilityGroupsServiceFactory.fetchDeviceAccessibilityGroupsService()).listDeviceAccessibilityGroups(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityGroupsEndpoint file in listDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    deviceAccessibilityGroupsDTO = await ( await deviceAccessibilityGroupsServiceFactory.fetchDeviceAccessibilityGroupsService()).createDeviceAccessibilityGroups(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{deviceAccessibilityGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityGroupsEndpoint file in createDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:deviceAccessibilityGroupCode',async (req,res) => {
  try {
    deviceAccessibilityGroupsDTO = await ( await deviceAccessibilityGroupsServiceFactory.fetchDeviceAccessibilityGroupsService()).updateDeviceAccessibilityGroups(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityGroupsEndpoint file in updateDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:deviceAccessibilityGroupCode',async (req,res) => {
  try {
    deviceAccessibilityGroupsDTO = await ( await deviceAccessibilityGroupsServiceFactory.fetchDeviceAccessibilityGroupsService()).deleteDeviceAccessibilityGroups(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{deviceAccessibilityGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityGroupsEndpoint file in deleteDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;