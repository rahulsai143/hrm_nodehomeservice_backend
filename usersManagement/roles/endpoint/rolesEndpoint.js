const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  rolesServiceFactory = require('../service/rolesServiceFactory');

router.get('/',async (req,res) => {
  try {
    rolesDTO = await ( await rolesServiceFactory.fetchRolesService()).listRoles(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{rolesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in rolesEndpoint file in listRoles method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    rolesDTO = await ( await rolesServiceFactory.fetchRolesService()).createRole(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{rolesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in rolesEndpoint file in createRole method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:roleCode',async (req,res) => {
  try {
    rolesDTO = await ( await rolesServiceFactory.fetchRolesService()).updateRole(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{rolesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in rolesEndpoint file in updateRole method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:roleCode',async (req,res) => {
  try {
    rolesDTO = await ( await rolesServiceFactory.fetchRolesService()).deleteRole(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{rolesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in rolesEndpoint file in deleteRole method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;
