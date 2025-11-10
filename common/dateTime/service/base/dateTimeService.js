const ntpClient = require('ntp-client-promise');

const getDateTime = async (requestData, responseData) => {
  let dateTime;
  try {
    dateTime = await ntpClient.getNetworkTime();
  } catch (error) {

  }
  return dateTime;
};

module.exports = {
  getDateTime
};