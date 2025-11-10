const countriesRepository = require('./schema/repository/countriesRespository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listCountries = async(session,countriesDTO) => {
  try {
    countriesDTO =  await countriesRepository.listCountries();
  } catch(exception){
    logger.loggerInstance.error('Error in listCountries method', { errorMessage: exception.message, stack: exception.stack });
  }
  return countriesDTO;
};

module.exports = {listCountries};