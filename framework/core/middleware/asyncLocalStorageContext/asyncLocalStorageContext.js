const asyncLocalStorage = require('../../../../initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage');

const asyncLocalStorageContextMiddleware = async (req, res, next) => {
  await asyncLocalStorage.asyncLocalStorageInstance.run(new Map(), () => {
    next();
  });
};

module.exports = { asyncLocalStorageContextMiddleware };
