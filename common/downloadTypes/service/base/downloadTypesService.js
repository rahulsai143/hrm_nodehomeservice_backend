const downloadTypesRepository = require('../base/schema/repository/downloadTypesRespository');
const logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const listDownloadTypes = async(session,downloadTypesDTO) => {
  try {
    downloadTypesDTO =  await downloadTypesRepository.listDownloadTypes();
  } catch(exception){
    logger.loggerInstance.error('Error in listDownloadTypes method', { errorMessage: exception.message, stack: exception.stack });
  }
  return downloadTypesDTO;
};

module.exports = {listDownloadTypes};