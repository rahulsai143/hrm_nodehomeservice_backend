const destinationPreferencesModel = require('../../../models/destinationPreferencesModel');

const readDestinationPreferences = async username => {
  return await destinationPreferencesModel.findOne({ username });
};

module.exports = { readDestinationPreferences };