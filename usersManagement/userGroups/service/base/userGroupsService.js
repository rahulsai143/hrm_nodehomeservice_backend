const userGroupsRepository = require('./schema/repository/userGroupsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listUserGroups = async(session,userGroupsRequestDTO) => {
  let userGroupsDTO;
  try {
    userGroupsDTO =  await userGroupsRepository.listUserGroups();
  } catch(exception){
    logger.loggerInstance.error('Error in listUserGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return userGroupsDTO;
};

const createUserGroup = async(session,userGroupRequestDTO) => {
  let userGroupDTO;
  try {
    userGroupDTO =  await userGroupsRepository.createUserGroup(userGroupRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createUserGroup method', { errorMessage: exception.message, stack: exception.stack });
  }
  return userGroupDTO;
};

const updateUserGroup = async(session,userGroupRequestDTO) => {
  let userGroupDTO;
  try {
    userGroupDTO =  await userGroupsRepository.updateUserGroup(userGroupRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateUserGroup method', { errorMessage: exception.message, stack: exception.stack });
  }
  return userGroupDTO;
};

const deleteUserGroup = async(session,userGroupRequestDTO) => {
  let userGroupDTO;
  try {
    userGroupDTO =  await userGroupsRepository.deleteUserGroup(userGroupRequestDTO.name);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteUserGroup method', { errorMessage: exception.message, stack: exception.stack });
  }
  return userGroupDTO;
};

module.exports = {listUserGroups,createUserGroup,updateUserGroup,deleteUserGroup};