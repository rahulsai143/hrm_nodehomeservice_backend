const responseCodesModel = require('../responseCodesSchema'),
  headersDefault = require('./headersDefault');

const findAllHeadersByType = async (type) => (await responseCodesModel.findAll({type}))?.[0] || headersDefault.filter(headerDefault => headerDefault.type === type);;

module.exports = {findAllHeadersByType};