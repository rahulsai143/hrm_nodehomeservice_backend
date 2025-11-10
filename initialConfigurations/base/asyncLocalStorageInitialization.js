const asyncHooks = require('async_hooks');

let asyncLocalStorageInstance;

const initializeAsyncLocalStorage = async () => new asyncHooks.AsyncLocalStorage();

const createAsyncLocalStorage = async () => asyncLocalStorageInstance || (asyncLocalStorageInstance = await initializeAsyncLocalStorage());

module.exports = { createAsyncLocalStorage};