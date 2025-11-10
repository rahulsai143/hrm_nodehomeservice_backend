const transactionsRepository = require('../schema/repository/transactionsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listDownloadTypes = async (session, requestBody) => {
  try {
    const downloadTypes = await transactionsRepository.listDownloadTypes();
    return downloadTypes;
  } catch (exception) {
    logger.loggerInstance.error('Error in transactionsService file in listDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const createDownloadTypes = async (session, requestBody) => {
  try {
    const downloadTypes = await transactionsRepository.createDownloadTypes(requestBody);
    return downloadTypes;
  } catch (exception) {
    logger.loggerInstance.error('Error in transactionsService file in createDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const updateDownloadTypes = async (session, requestBody) => {
  try {
    const downloadTypes = await transactionsRepository.updateDownloadTypes(requestBody);
    return downloadTypes;
  } catch (exception) {
    logger.loggerInstance.error('Error in transactionsService file in updateDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const deleteDownloadTypes = async (session, requestBody) => {
  try {
    const downloadTypes = await transactionsRepository.deleteDownloadTypes(requestBody);
    return downloadTypes;
  } catch (exception) {
    logger.loggerInstance.error('Error in transactionsService file in deleteDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

module.exports = { listDownloadTypes, createDownloadTypes, updateDownloadTypes, deleteDownloadTypes };