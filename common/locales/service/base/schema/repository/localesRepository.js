const localesModel = require('../localesSchema'),
  localesDefault = require('./localesDefault');

const findByAll = async () => {
  const locales = await localesModel.find();
  return locales.length ? locales : localesDefault;
};

module.exports =  {findByAll};