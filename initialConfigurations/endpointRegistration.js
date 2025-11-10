const userManagementEndpoints = require('../usersManagement/registerUserManagementEndpoints'),
  commonEndpoints = require('../common/registerCommonEndpoints'),
  alertsEndpoints = require('../alerts/registerAlertsEndpoints');


const registerModuleEndpoints = async () => {
  await userManagementEndpoints.registerEndPoints();
  await commonEndpoints.registerEndPoints();
  await alertsEndpoints.registerEndPoints();
};

module.exports = {registerModuleEndpoints};

