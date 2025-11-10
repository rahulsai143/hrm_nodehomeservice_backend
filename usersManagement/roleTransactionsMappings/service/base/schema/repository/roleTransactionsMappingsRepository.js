const roleTransactionsMappingsSchema = require('../roleTransactionsMappingsSchema');

const listRoleTransactionsMappings = async () => {
  return await roleTransactionsMappingsSchema.find();
};

const createRoleTransactionsMapping = async (roleTransactionsMappingRequestDTO) => {
  return await roleTransactionsMappingsSchema.create(roleTransactionsMappingRequestDTO);
};

const updateRoleTransactionsMapping = async (roleTransactionsMappingRequestDTO) => {
  return await roleTransactionsMappingsSchema.update(roleTransactionsMappingRequestDTO);
};

const deleteRoleTransactionsMapping = async (roleTransactionsMappingRequestDTO) => {
  return await roleTransactionsMappingsSchema.findOneAndDelete({ roleId: roleTransactionsMappingRequestDTO.roleId, transactionId: roleTransactionsMappingRequestDTO.transactionId });
};

module.exports = {listRoleTransactionsMappings,createRoleTransactionsMapping,updateRoleTransactionsMapping,deleteRoleTransactionsMapping};