const securityQuestionsMaintenanceRepository = require('./schema/repository/securityQuestionsMaintenanceRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listSecurityQuestionsMaintenance = async(session,securityQuestionsMaintenanceRequestDTO) => {
  let securityQuestionsMaintenanceDTO;
  try {
    securityQuestionsMaintenanceDTO =  await securityQuestionsMaintenanceRepository.listSecurityQuestionsMaintenance();
  } catch(exception){
    logger.loggerInstance.error('Error in listSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return securityQuestionsMaintenanceDTO;
};

const createSecurityQuestionsMaintenance = async(session,securityQuestionsMaintenanceRequestDTO) => {
  let securityQuestionsMaintenanceDTO;
  try {
    securityQuestionsMaintenanceDTO =  await securityQuestionsMaintenanceRepository.createSecurityQuestionsMaintenance(securityQuestionsMaintenanceRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return securityQuestionsMaintenanceDTO;
};

const readSecurityQuestionsMaintenance = async(session,securityQuestionsMaintenanceRequestDTO) => {
  let securityQuestionsMaintenanceDTO;
  try {
    securityQuestionsMaintenanceDTO =  await securityQuestionsMaintenanceRepository.readSecurityQuestionsMaintenance(securityQuestionsMaintenanceRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in readSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return securityQuestionsMaintenanceDTO;
};

const updateSecurityQuestionsMaintenance = async(session,securityQuestionsMaintenanceRequestDTO) => {
  let securityQuestionsMaintenanceDTO;
  try {
    securityQuestionsMaintenanceDTO =  await securityQuestionsMaintenanceRepository.updateSecurityQuestionsMaintenance(securityQuestionsMaintenanceRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return securityQuestionsMaintenanceDTO;
};

const deleteSecurityQuestionsMaintenance = async(session,securityQuestionsMaintenanceRequestDTO) => {
  let securityQuestionsMaintenanceDTO;
  try {
    securityQuestionsMaintenanceDTO =  await securityQuestionsMaintenanceRepository.deleteSecurityQuestionsMaintenance(securityQuestionsMaintenanceRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteSecurityQuestionsMaintenance method', { errorMessage: exception.message, stack: exception.stack });
  }
  return securityQuestionsMaintenanceDTO;
};

module.exports = {
  listSecurityQuestionsMaintenance,
  createSecurityQuestionsMaintenance,
  readSecurityQuestionsMaintenance,
  updateSecurityQuestionsMaintenance,
  deleteSecurityQuestionsMaintenance
};