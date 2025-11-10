const asyncLocalStorage = require('../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage');
const defaultConstants = require('../../../infra/constants/defaultConstants');

const queryParamsMiddleware = async (req, res, next) => {
  asyncLocalStorage.asyncLocalStorageInstance.getStore().set('locale', req.query.locale || defaultConstants.defaultLocale);
  next();
};

module.exports = { queryParamsMiddleware };
