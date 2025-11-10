const express = require('express'),
    router = express.Router(),
    logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
    responseBuilder = require('../../../framework/infra/response/responseBuilder'),
    responseCodes= require('../../../framework/infra/constants/responseCodes'),
    securityQuestionsMaintenanceServiceFactory = require('../service/securityQuestionsMaintenanceServiceFactory');

router.get('/',async (req,res) => {
  try {
    securityQuestionsMaintenanceDTO = await ( await securityQuestionsMaintenanceServiceFactory.fetchSecurityQuestionsMaintenanceService()).listSecurityQuestionsMaintenance(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{securityQuestionsMaintenanceDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in securityQuestionsMaintenanceEndpoint file in listSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    securityQuestionsMaintenanceDTO = await ( await securityQuestionsMaintenanceServiceFactory.fetchSecurityQuestionsMaintenanceService()).createSecurityQuestionsMaintenance(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.Created,{securityQuestionsMaintenanceDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in securityQuestionsMaintenanceEndpoint file in createSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/:securityQuestionsMaintenanceCode',async (req,res) => {
  try {
    securityQuestionsMaintenanceDTO = await ( await securityQuestionsMaintenanceServiceFactory.fetchSecurityQuestionsMaintenanceService()).updateSecurityQuestionsMaintenance(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{securityQuestionsMaintenanceDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in securityQuestionsMaintenanceEndpoint file in updateSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/:securityQuestionsMaintenanceCode',async (req,res) => {
  try {
    securityQuestionsMaintenanceDTO = await ( await securityQuestionsMaintenanceServiceFactory.fetchSecurityQuestionsMaintenanceService()).deleteSecurityQuestionsMaintenance(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{securityQuestionsMaintenanceDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in securityQuestionsMaintenanceEndpoint file in deleteSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;