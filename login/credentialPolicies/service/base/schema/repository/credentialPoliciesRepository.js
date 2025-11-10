const credentialPoliciesSchema = require('./credentialPoliciesSchema');

const listCredentialPolicies = async() => {
  return await credentialPoliciesSchema.find({});
};

const createCredentialPolicies = async(credentialPolicyRequestDTO) => {
  return await credentialPoliciesSchema.create(credentialPolicyRequestDTO);
};

const updateCredentialPolicies = async(credentialPolicyRequestDTO) => {
  return await credentialPoliciesSchema.updateOne({name: credentialPolicyRequestDTO.name},{$set: credentialPolicyRequestDTO});
};

const deleteCredentialPolicies = async(credentialPolicyCode) => {
  return await credentialPoliciesSchema.deleteOne({name: credentialPolicyCode});
};

module.exports = {listCredentialPolicies,createCredentialPolicies,updateCredentialPolicies,deleteCredentialPolicies};