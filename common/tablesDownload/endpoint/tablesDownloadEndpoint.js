const express = require('express'),
  router = express.Router(),
  responseBuilder = require('../../../framework/infra/response/responseBuilder'),
  responseCodes= require('../../../framework/infra/constants/responseCodes'),
  tablesDownloadServiceFactory = require('../service/tablesDownloadServiceFactory');

router.get('/',async (req,res) => {
  try {
    localesDTO = await ( await tablesDownloadServiceFactory.fetchLocalesService()).listLocales(req.session, req.body || {});
    responseBuilder.buildResponse(res,responseCodes.OK,{localesDTO});
  } catch(exception) {

  }
  return res;
});

module.exports = router;