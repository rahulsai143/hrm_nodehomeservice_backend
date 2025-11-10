const userTypesRespository = require('./schema/repository/dndPreferencesRepository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const readdndPreferences = async(session,dndPreferencesRequestDTO) => {
  let dndPreferencesDTO;
  try {
    dndPreferencesDTO =  await userTypesRespository.readdndPreferences();
  } catch(exception){
    logger.loggerInstance.error('Error in readdndPreferences method', { errorMessage: exception.message, stack: exception.stack });
  }
  return dndPreferencesDTO;
};

module.exports = {readdndPreferences};