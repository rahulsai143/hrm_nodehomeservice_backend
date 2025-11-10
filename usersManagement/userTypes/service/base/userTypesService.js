const userTypesRespository = require('./schema/repository/userTypesRespository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listUserTypes = async(session,userTypesRequestDTO) => {
  let userTypesDTO;
  try {
    userTypesDTO =  await userTypesRespository.listUserTypes();
  } catch(exception){
    logger.loggerInstance.error('Error in listUserTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return userTypesDTO;
};

module.exports = {listUserTypes};