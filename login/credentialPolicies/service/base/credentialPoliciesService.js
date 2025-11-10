const credentialPoliciesRepository = require('./schema/repository/credentialPoliciesRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listCredentialPolicies = async(session,credentialPoliciesRequestDTO) => {
  let credentialPoliciesDTO;
  try {
    credentialPoliciesDTO =  await credentialPoliciesRepository.listCredentialPolicies();
  } catch(exception){
    logger.loggerInstance.error('Error in listCredentialPolicies method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialPoliciesDTO;
};

const createCredentialPolicies = async(session,credentialPolicyRequestDTO) => {
  let credentialPoliciesDTO;
  try {
    credentialPoliciesDTO =  await credentialPoliciesRepository.createCredentialPolicies(credentialPolicyRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createCredentialPolicies method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialPoliciesDTO;
};

const updateCredentialPolicies = async(session,credentialPolicyRequestDTO) => {
  let credentialPoliciesDTO;
  try {
    credentialPoliciesDTO =  await credentialPoliciesRepository.updateCredentialPolicies(credentialPolicyRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateCredentialPolicies method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialPoliciesDTO;
};

const deleteCredentialPolicies = async(session,credentialPolicyRequestDTO) => {
  let credentialPoliciesDTO;
  try {
    credentialPoliciesDTO =  await credentialPoliciesRepository.deleteCredentialPolicies(credentialPolicyRequestDTO.name);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteCredentialPolicies method', { errorMessage: exception.message, stack: exception.stack });
  }
  return credentialPoliciesDTO;
};

module.exports = {listCredentialPolicies,createCredentialPolicies,updateCredentialPolicies,deleteCredentialPolicies};