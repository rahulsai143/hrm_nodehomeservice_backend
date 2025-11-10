const app = require('./app'),
  mongoose = require("mongoose"),
  expressWinston = require("express-winston"),
  config = require("./initialConfigurations/config"),
  loggerFactory = require("./initialConfigurations/loggerFactory"),
  messageBrokerFactory = require('./initialConfigurations/messageBrokerFactory'),
  localCacheFactory = require('./initialConfigurations/localCacheFactory'),
  handleBarsFactory = require('./initialConfigurations/handleBarsFactory'),
  asyncLocalStorageFactory = require('./initialConfigurations/asyncLocalStorageFactory'),
  endpointRegistration = require('./initialConfigurations/endpointRegistration'),
  globalConstantsInitialization = require('./initialConfigurations/globalConstantsInitialization'),
  asyncLocalStorageContext = require('./framework/core/middleware/asyncLocalStorageContext/asyncLocalStorageContext'),
  sessionContext = require('./framework/core/middleware/sessionContext/sessionContext'),
  queryParams = require('./framework/core/middleware/queryParams/queryParams'),
  loginContext = require('./framework/core/middleware/loginContext/loginContext');

const logger = require('./initialConfigurations/globalInstances/logger/logger'),
  messageBroker = require('./initialConfigurations/globalInstances/messageBroker/messageBroker'),
  localCache = require('./initialConfigurations/globalInstances/localCache/localCache'),
  asyncLocalStorage = require('./initialConfigurations/globalInstances/asyncLocalStorage/asyncLocalStorage'),
  handleBars = require('./initialConfigurations/globalInstances/handleBars/handleBars');

let serverRunning = false;

const setupLoggerMiddleware = () => {
  app.use(expressWinston.logger({ winstonInstance: logger.loggerInstance, meta: true, expressFormat: true, colorize: false }));
  app.use(expressWinston.errorLogger({ winstonInstance: logger.loggerInstance }));
};

const connectToDatabase = async () => 
  mongoose.connect(`${config.dataBaseUrl}/${config.dataBaseName}`);  

const disconnectDb = () => mongoose.disconnect();

const startServer = (port) => {
  const server = app.listen(port, err => 
    err ? (logger.loggerInstance.error(`Server failed: ${err.message}`), disconnectDb()) : (serverRunning = true, logger.loggerInstance.info(`Server running on port ${port}`))
  );

  const shutdown = async () => {
    logger.loggerInstance.info('Shutting down server...');
    await disconnectDb();
    serverRunning ? server.close(() => process.exit(0)) : process.exit(0); // Exit regardless of server running status
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
};

const initializeDependencies = async () => {
  await connectToDatabase();
  localCache.localCacheInstance = await (await localCacheFactory.fetchLocalCache()).createLocalCache();
  logger.loggerInstance = await (await loggerFactory.fetchLogger()).createLogger();
  messageBroker.messageBrokerInstance = await (await messageBrokerFactory.fetchMessageBroker()).createMessageBroker();
  handleBars.handleBarsInstance = await (await handleBarsFactory.fetchHandleBar()).createHandleBars();
  asyncLocalStorage.asyncLocalStorageInstance = await (await asyncLocalStorageFactory.fetchAsyncLocalStorage()).createAsyncLocalStorage();
  await globalConstantsInitialization.initalizeGlobalConstants();
};

const setupMiddlewaresAndServer = async () => {
  setupLoggerMiddleware();
  app.use(sessionContext.sessionContextMiddleware);
  app.use(loginContext.loginContextMiddleware);
  app.use(asyncLocalStorageContext.asyncLocalStorageContextMiddleware);
  app.use(queryParams.queryParamsMiddleware);
  await endpointRegistration.registerModuleEndpoints();
  startServer(process.env.PORT || config.port);
};

const initializeServer = async () => {
  await initializeDependencies();
  await setupMiddlewaresAndServer();
};

initializeServer();

