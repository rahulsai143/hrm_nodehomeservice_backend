const phoneNumbersRespository = require('./schema/repository/phoneNumbersRespository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listPhoneNumbers = async(session,phoneNumbersDTO) => {
  try {
    phoneNumbersDTO =  await phoneNumbersRespository.listPhoneNumbers();
  } catch(exception){
    logger.loggerInstance.error('Error in listPhoneNumbers method', { errorMessage: exception.message, stack: exception.stack });
  }
  return phoneNumbersDTO;
};

module.exports = {listPhoneNumbers};