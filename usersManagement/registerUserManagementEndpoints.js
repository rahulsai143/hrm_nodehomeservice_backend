const loadash = require('lodash'),
  app = require('../app'),
  logger = require('../initialConfigurations/globalInstances/logger/logger'),
  defaultEndPoints = require('./userManagementEndpoints'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const endpoints = {
  usersEndpoint: require('./users/endPoint/usersEndpoint')
};

const registerEndPoints = async () => {
  const config = await configurationRepository.findByCode('userManagementEndpoints');
  const mergedEndpoints = loadash.merge({}, defaultEndPoints, config?.value);
  const registeredRoutes = new Set();
  Object.entries(mergedEndpoints.endpoints).forEach(([endpoint, { route, isActive }]) => 
    !isActive || !endpoints[endpoint] ? logger.loggerInstance.error(`Endpoint ${endpoint} is inactive or not found.`) :
      registeredRoutes.has(route) ? logger.loggerInstance.error(`Duplicate route detected: ${route} for endpoint ${endpoint}.`) :
        (app.use(route, endpoints[endpoint]), registeredRoutes.add(route))
  );
};

module.exports = { registerEndPoints };
