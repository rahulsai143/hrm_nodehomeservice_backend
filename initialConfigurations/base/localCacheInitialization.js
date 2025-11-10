const NodeCache = require('node-cache');

let localCacheInstance;

const initializeLocalCache = async () => new NodeCache();

const createLocalCache = async () => localCacheInstance || (localCacheInstance = await initializeLocalCache());

module.exports = { createLocalCache };