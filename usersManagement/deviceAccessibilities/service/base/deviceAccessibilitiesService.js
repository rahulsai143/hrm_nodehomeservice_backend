const deviceAccessibilitiesRepository = require('./schema/repository/deviceAccessibilitiesRepository'),
  logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listDeviceAccessibilities = async(session,deviceAccessibilitiesRequestDTO) => {
  let deviceAccessibilitiesDTO;
  try {
    deviceAccessibilitiesDTO =  await deviceAccessibilitiesRepository.listDeviceAccessibilities();
  } catch(exception){
    logger.loggerInstance.error('Error in listDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilitiesDTO;
};

const createDeviceAccessibilities = async(session,deviceAccessibilityRequestDTO) => {
  let deviceAccessibilitiesDTO;
  try {
    deviceAccessibilitiesDTO =  await deviceAccessibilitiesRepository.createDeviceAccessibilities(deviceAccessibilityRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in createDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilitiesDTO;
};

const updateDeviceAccessibilities = async(session,deviceAccessibilityRequestDTO) => {
  let deviceAccessibilitiesDTO;
  try {
    deviceAccessibilitiesDTO =  await deviceAccessibilitiesRepository.updateDeviceAccessibilities(deviceAccessibilityRequestDTO);
  } catch(exception){
    logger.loggerInstance.error('Error in updateDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilitiesDTO;
};

const deleteDeviceAccessibilities = async(session,deviceAccessibilityRequestDTO) => {
  let deviceAccessibilitiesDTO;
  try {
    deviceAccessibilitiesDTO =  await deviceAccessibilitiesRepository.deleteDeviceAccessibilities(deviceAccessibilityRequestDTO.name);
  } catch(exception){
    logger.loggerInstance.error('Error in deleteDeviceAccessibilities method', { errorMessage: exception.message, stack: exception.stack });
  }
  return deviceAccessibilitiesDTO;
};

module.exports = {listDeviceAccessibilities,createDeviceAccessibilities,updateDeviceAccessibilities,deleteDeviceAccessibilities};