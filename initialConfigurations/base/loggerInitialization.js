const winston = require('winston'),
  MongoDBTransport = require('winston-mongodb'),
  lodash = require('lodash'),
  configurationRepository = require('../../framework/infra/configurations/schema/repository/configurationRepository'),
  config = require("../config");

const configCode = 'loggers',
  defaultLoggerOptions = {
    loggers: [
      { collectionName: "error", level: "error" },
      { collectionName: "info", level: "info" }
    ],
    loggerLevel: "info"
  };
let loggerInstance;

const initializeLogger = async () => {
  const loggerOptions = lodash.merge({}, defaultLoggerOptions, await configurationRepository.findByCode(configCode));

  return winston.createLogger({
    level: loggerOptions.loggerLevel,
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: loggerOptions.loggers.map(logger => new MongoDBTransport.MongoDB({
      db: `${config.dataBaseUrl}/${config.dataBaseName}`,
      collection: logger.collectionName,
      level: logger.level,
    }))
  });	
};

const createLogger = async () => loggerInstance || (loggerInstance = await initializeLogger());

module.exports = { createLogger };
