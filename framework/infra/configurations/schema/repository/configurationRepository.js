const configurationModel = require('../configurationSchema'),
  localCache = require('../../../../../initialConfigurations/globalInstances/localCache/localCache'),
  environmentConstants = require('../../../../../environmentConstants');

const findByCodeAndType= async (code, type) => {
  if (environmentConstants.isDevelopment || !localCache.localCacheInstance ) return (await configurationModel.findOne({ code, type }))?.value;
  const cachedValue = (localCache.localCacheInstance.get(type) || {})[code] ?? (await configurationModel.findOne({ code, type }))?.value;
  localCache.localCacheInstance.set(type, { ...(localCache.localCacheInstance.get(type) || {}), [code]: cachedValue });
  return cachedValue;
};

const findByCode = async (code) => {
  if (environmentConstants.isDevelopment || !localCache.localCacheInstance) return (await configurationModel.findOne({ code }))?.value;
  const cachedValue = localCache.localCacheInstance.get(code) ?? (await configurationModel.findOne({ code }))?.value;
  localCache.localCacheInstance.set(code, cachedValue);
  return cachedValue;
};

module.exports = {
  findByCodeAndType,
  findByCode
};