const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  userGroupsServiceFactory = require('../service/userGroupsServiceFactory');

router.get('/',async (req,res) => {
  try {
    userGroupsDTO = await ( await userGroupsServiceFactory.fetchUserGroupsService()).listUserGroups(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{userGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in userGroupsEndpoint file in listUserGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    userGroupsDTO = await ( await userGroupsServiceFactory.fetchUserGroupsService()).createUserGroup(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{userGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in userGroupsEndpoint file in createUserGroup method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:userGroupCode',async (req,res) => {
  try {
    userGroupsDTO = await ( await userGroupsServiceFactory.fetchUserGroupsService()).updateUserGroup(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{userGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in userGroupsEndpoint file in updateUserGroup method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:userGroupCode',async (req,res) => {
  try {
    userGroupsDTO = await ( await userGroupsServiceFactory.fetchUserGroupsService()).deleteUserGroup(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{userGroupsDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in userGroupsEndpoint file in deleteUserGroup method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;