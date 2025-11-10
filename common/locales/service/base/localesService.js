const localesRepository = require('../base/schema/repository/localesRepository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listLocales = async(session,localesDTO) => {
  try {
    localesDTO =  await localesRepository.findByAll();
  } catch(exception){
    logger.loggerInstance.error('Error in listLocales method', { errorMessage: exception.message, stack: exception.stack });
  }
  return localesDTO;
};

module.exports = {listLocales};