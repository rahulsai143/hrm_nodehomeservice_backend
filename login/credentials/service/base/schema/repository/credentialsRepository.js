const credentialsSchema = require('./credentialsSchema');

const listCredentials = async() => {
  return await credentialsSchema.find({});
};

const createCredentials = async(credentialRequestDTO) => {
  return await credentialsSchema.create(credentialRequestDTO);
};

const updateCredentials = async(credentialRequestDTO) => {
  return await credentialsSchema.updateOne({name: credentialRequestDTO.name},{$set: credentialRequestDTO});
};

const deleteCredentials = async(credentialCode) => {
  return await credentialsSchema.deleteOne({name: credentialCode});
};

module.exports = {listCredentials,createCredentials,updateCredentials,deleteCredentials};