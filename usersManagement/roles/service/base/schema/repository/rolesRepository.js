const rolesSchema = require('../rolesSchema');

const listRoles = async () => {
  return await rolesSchema.find();
};

const createRole = async (roleRequestDTO) => {
  return await rolesSchema.create(roleRequestDTO);
};

const updateRole = async (roleRequestDTO) => {
  return await rolesSchema.update(roleRequestDTO);
};

const deleteRole = async (name) => {
  return await rolesSchema.findOneAndDelete({ name: name });
};

module.exports = {listRoles,createRole,updateRole,deleteRole};