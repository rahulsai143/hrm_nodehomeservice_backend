const userGroupsSchema = require('../userGroupsSchema');

const listUserGroups = async () => {
  return await userGroupsSchema.find();
};

const createUserGroup = async (userGroupRequestDTO) => {
  return await userGroupsSchema.create(userGroupRequestDTO);
};

const updateUserGroup = async (userGroupRequestDTO) => {
  return await userGroupsSchema.update(userGroupRequestDTO);
};

const deleteUserGroup = async (name) => {
  return await userGroupsSchema.findOneAndDelete({ name: name });
};

module.exports = {listUserGroups,createUserGroup,updateUserGroup,deleteUserGroup};