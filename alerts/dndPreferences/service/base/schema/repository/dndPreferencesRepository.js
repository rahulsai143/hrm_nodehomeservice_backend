const dndPreferencesModel = require('../../../models/dndPreferencesModel');

const readdndPreferences = async username => {
  return await dndPreferencesModel.findOne({ username });
};

module.exports = { readdndPreferences };