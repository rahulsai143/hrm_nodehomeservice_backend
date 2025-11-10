const destinationsRepository = require('../../schema/repository/destinationsRepository'),
  interaction = require('../../../../framework/infra/interaction');

const listDestinations = async (req) => {
  let responseDTO = {};
  try {
    responseDTO.destinations = await destinationsRepository.listDestinations();
  } catch (exception) {

  } finally {
    interaction.close(req);
  }
  return responseDTO;
};

module.exports = {listDestinations};