const webAuthUsersModel = require('../webAuthUsersSchema');

const readWebAuthUserByUsername = async (webAuthRequestDTO) =>
  await webAuthUsersModel.findOne({ username: webAuthRequestDTO.username }).lean();

const readWebAuthUserByuserId = async (webAuthRequestDTO) =>
  await webAuthUsersModel.findOne({ userId: webAuthRequestDTO.userId }).lean();

module.exports = {readWebAuthUserByUsername,readWebAuthUserByuserId}