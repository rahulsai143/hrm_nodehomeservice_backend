const express = require('express'),
  router = express.Router(),
  logger = require('../../../initialConfigurations/globalInstances/logger/logger'),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  transactionsServiceFactory = require('../service/transactionsServiceFactory');

router.get('/',async (req,res) => {
  try {
    downloadTypesDTO = await ( await transactionsServiceFactory.fetchTransactionsService()).listDownloadTypes(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{downloadTypesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in downloadTypesEndpoint file in listDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.post('/',async (req,res) => {
  try {
    downloadTypesDTO = await ( await transactionsServiceFactory.fetchTransactionsService()).createDownloadTypes(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{downloadTypesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in downloadTypesEndpoint file in createDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.put('/',async (req,res) => {
  try {
    downloadTypesDTO = await ( await transactionsServiceFactory.fetchTransactionsService()).updateDownloadTypes(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{downloadTypesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in downloadTypesEndpoint file in updateDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

router.delete('/',async (req,res) => {
  try {
    downloadTypesDTO = await ( await transactionsServiceFactory.fetchTransactionsService()).deleteDownloadTypes(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{downloadTypesDTO});
  } catch(exception) {
    logger.loggerInstance.error('Error in downloadTypesEndpoint file in deleteDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return res;
});

module.exports = router;