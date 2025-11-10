const rolesRepository = require('./schema/repository/rolesRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listRoles = async(session,rolesRequestDTO) => {
  let rolesDTO;
  try {
    rolesDTO =  await rolesRepository.listRoles();
  } catch(exception){
    logger.loggerInstance.error('Error in listRoles method', { errorMessage: exception.message, stack: exception.stack });
  }
  return rolesDTO;
};

const createRole = async(session,roleRequestDTO) => {
  let roleDTO;
  try {
    roleDTO =  await rolesRepository.createRole(roleRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createRole method', { errorMessage: exception.message, stack: exception.stack });
  }
  return roleDTO;
};

const updateRole = async(session,roleRequestDTO) => {
  let roleDTO;
  try {
    roleDTO =  await rolesRepository.updateRole(roleRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateRole method', { errorMessage: exception.message, stack: exception.stack });
  }
  return roleDTO;
};

const deleteRole = async(session,roleRequestDTO) => {
  let roleDTO;
  try {
    roleDTO =  await rolesRepository.deleteRole(roleRequestDTO.name);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteRole method', { errorMessage: exception.message, stack: exception.stack });
  }
  return roleDTO;
};

module.exports = {listRoles,createRole,updateRole,deleteRole};