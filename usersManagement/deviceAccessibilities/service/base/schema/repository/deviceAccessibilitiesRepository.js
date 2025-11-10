const deviceAccessibilitiesSchema = require('./deviceAccessibilitiesSchema');

const listDeviceAccessibilities = async() => {
  return await deviceAccessibilitiesSchema.find({});
};

const createDeviceAccessibilities = async(deviceAccessibilityRequestDTO) => {
  return await deviceAccessibilitiesSchema.create(deviceAccessibilityRequestDTO);
};

const updateDeviceAccessibilities = async(deviceAccessibilityRequestDTO) => {
  return await deviceAccessibilitiesSchema.updateOne({name: deviceAccessibilityRequestDTO.name},{$set: deviceAccessibilityRequestDTO});
};

const deleteDeviceAccessibilities = async(deviceAccessibilityCode) => {
  return await deviceAccessibilitiesSchema.deleteOne({name: deviceAccessibilityCode});
};

module.exports = {listDeviceAccessibilities,createDeviceAccessibilities,updateDeviceAccessibilities,deleteDeviceAccessibilities};