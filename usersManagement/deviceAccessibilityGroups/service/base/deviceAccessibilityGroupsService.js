const deviceAccessibilityGroupsRepository = require('./schema/repository/deviceAccessibilityGroupsRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listDeviceAccessibilityGroups = async(session,deviceAccessibilityGroupsRequestDTO) => {
  let deviceAccessibilityGroupsDTO;
  try {
    deviceAccessibilityGroupsDTO =  await deviceAccessibilityGroupsRepository.listDeviceAccessibilityGroups();
  } catch(exception){
    logger.loggerInstance.error('Error in listDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilityGroupsDTO;
};

const createDeviceAccessibilityGroups = async(session,deviceAccessibilityGroupRequestDTO) => {
  let deviceAccessibilityGroupsDTO;
  try {
    deviceAccessibilityGroupsDTO =  await deviceAccessibilityGroupsRepository.createDeviceAccessibilityGroups(deviceAccessibilityGroupRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilityGroupsDTO;
};

const updateDeviceAccessibilityGroups = async(session,deviceAccessibilityGroupRequestDTO) => {
  let deviceAccessibilityGroupsDTO;
  try {
    deviceAccessibilityGroupsDTO =  await deviceAccessibilityGroupsRepository.updateDeviceAccessibilityGroups(deviceAccessibilityGroupRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilityGroupsDTO;
};

const deleteDeviceAccessibilityGroups = async(session,deviceAccessibilityGroupRequestDTO) => {
  let deviceAccessibilityGroupsDTO;
  try {
    deviceAccessibilityGroupsDTO =  await deviceAccessibilityGroupsRepository.deleteDeviceAccessibilityGroups(deviceAccessibilityGroupRequestDTO.name);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteDeviceAccessibilityGroups method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilityGroupsDTO;
};

module.exports = {listDeviceAccessibilityGroups,createDeviceAccessibilityGroups,updateDeviceAccessibilityGroups,deleteDeviceAccessibilityGroups};