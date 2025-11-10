const deviceAccessibilityGroupsSchema = require('../deviceAccessibilityGroupsSchema');

const listDeviceAccessibilityGroups = async() => {
  return await deviceAccessibilityGroupsSchema.find({});
};

const createDeviceAccessibilityGroups = async(deviceAccessibilityGroupRequestDTO) => {
  return await deviceAccessibilityGroupsSchema.create(deviceAccessibilityGroupRequestDTO);
};

const updateDeviceAccessibilityGroups = async(deviceAccessibilityGroupRequestDTO) => {
  return await deviceAccessibilityGroupsSchema.updateOne({name: deviceAccessibilityGroupRequestDTO.name},{$set: deviceAccessibilityGroupRequestDTO});
};

const deleteDeviceAccessibilityGroups = async(deviceAccessibilityGroupCode) => {
  return await deviceAccessibilityGroupsSchema.deleteOne({name: deviceAccessibilityGroupCode});
};

module.exports = {listDeviceAccessibilityGroups,createDeviceAccessibilityGroups,updateDeviceAccessibilityGroups,deleteDeviceAccessibilityGroups};
