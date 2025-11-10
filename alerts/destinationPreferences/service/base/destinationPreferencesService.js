const userTypesRespository = require('./schema/repository/destinationPreferencesRepository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const readDestinationPreferences = async(session,destinationPreferencesRequestDTO) => {
  let destinationPreferencesDTO;
  try {
    destinationPreferencesDTO =  await userTypesRespository.readDestinationPreferences();
  } catch(exception){
    logger.loggerInstance.error('Error in readDestinationPreferences method', { errorMessage: exception.message, stack: exception.stack });
  }
  return destinationPreferencesDTO;
};

module.exports = {readDestinationPreferences};