const deviceAccessibilityTransactionsMappingsRepository = require('../schema/repository/deviceAccessibilityTransactionsMappingsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listDeviceAccessibilityTransactionsMappings = async (session, requestBody) => {
  try {
    const deviceAccessibilityTransactionsMappings = await deviceAccessibilityTransactionsMappingsRepository.listDeviceAccessibilityTransactionsMappings();
    return deviceAccessibilityTransactionsMappings;
  } catch (exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsService file in listDeviceAccessibilityTransactionsMappings method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const createDeviceAccessibilityTransactionsMapping = async (session, requestBody) => {
  try {
    const deviceAccessibilityTransactionsMapping = await deviceAccessibilityTransactionsMappingsRepository.createDeviceAccessibilityTransactionsMapping(requestBody);
    return deviceAccessibilityTransactionsMapping;
  } catch (exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsService file in createDeviceAccessibilityTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const updateDeviceAccessibilityTransactionsMapping = async (session, requestBody) => {
  try {
    const deviceAccessibilityTransactionsMapping = await deviceAccessibilityTransactionsMappingsRepository.updateDeviceAccessibilityTransactionsMapping(requestBody);
    return deviceAccessibilityTransactionsMapping;
  } catch (exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsService file in updateDeviceAccessibilityTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const deleteDeviceAccessibilityTransactionsMapping = async (session, requestBody) => {
  try {
    const deviceAccessibilityTransactionsMapping = await deviceAccessibilityTransactionsMappingsRepository.deleteDeviceAccessibilityTransactionsMapping(requestBody);
    return deviceAccessibilityTransactionsMapping;
  } catch (exception) {
    logger.loggerInstance.error('Error in deviceAccessibilityTransactionsMappingsService file in deleteDeviceAccessibilityTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

module.exports = { listDeviceAccessibilityTransactionsMappings, createDeviceAccessibilityTransactionsMapping, updateDeviceAccessibilityTransactionsMapping, deleteDeviceAccessibilityTransactionsMapping };