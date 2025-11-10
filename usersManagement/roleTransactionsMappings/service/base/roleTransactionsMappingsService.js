const roleTransactionsMappingsRepository = require('../schema/repository/roleTransactionsMappingsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listRoleTransactionsMappings = async (session, requestBody) => {
  try {
    const roleTransactionsMappings = await roleTransactionsMappingsRepository.listRoleTransactionsMappings();
    return roleTransactionsMappings;
  } catch (exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsService file in listRoleTransactionsMappings method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const createRoleTransactionsMapping = async (session, requestBody) => {
  try {
    const roleTransactionsMapping = await roleTransactionsMappingsRepository.createRoleTransactionsMapping(requestBody);
    return roleTransactionsMapping;
  } catch (exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsService file in createRoleTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const updateRoleTransactionsMapping = async (session, requestBody) => {
  try {
    const roleTransactionsMapping = await roleTransactionsMappingsRepository.updateRoleTransactionsMapping(requestBody);
    return roleTransactionsMapping;
  } catch (exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsService file in updateRoleTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

const deleteRoleTransactionsMapping = async (session, requestBody) => {
  try {
    const roleTransactionsMapping = await roleTransactionsMappingsRepository.deleteRoleTransactionsMapping(requestBody);
    return roleTransactionsMapping;
  } catch (exception) {
    logger.loggerInstance.error('Error in roleTransactionsMappingsService file in deleteRoleTransactionsMapping method', { errorMessage: exception.message, stack: exception.stack });
    throw new Error(exception.message);
  }
};

module.exports = { listRoleTransactionsMappings, createRoleTransactionsMapping, updateRoleTransactionsMapping, deleteRoleTransactionsMapping };