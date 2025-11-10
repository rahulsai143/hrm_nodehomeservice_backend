const credentialsRepository = require('./schema/repository/credentialsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listCredentials = async(session,credentialsRequestDTO) => {
  let credentialsDTO;
  try {
    credentialsDTO =  await credentialsRepository.listCredentials();
  } catch(exception){
    logger.loggerInstance.error('Error in listCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialsDTO;
};

const createCredentials = async(session,credentialsRequestDTO) => {
  let credentialsDTO;
  try {
    credentialsDTO =  await credentialsRepository.createCredentials(credentialsRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialsDTO;
};

const updateCredentials = async(session,credentialsRequestDTO) => {
  let credentialsDTO;
  try {
    credentialsDTO =  await credentialsRepository.updateCredentials(credentialsRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialsDTO;
};

const deleteCredentials = async(session,credentialsRequestDTO) => {
  let credentialsDTO;
  try {
    credentialsDTO =  await credentialsRepository.deleteCredentials(credentialsRequestDTO.name);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteCredentials method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialsDTO;
};

module.exports = {listCredentials,createCredentials,updateCredentials,deleteCredentials};