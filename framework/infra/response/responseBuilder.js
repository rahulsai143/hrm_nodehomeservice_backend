const responseCodesRepository = require('./schema/repository/responseRepository');

const buildResponse = async (res, code, data = {}) => {
  res.status(code).json({ status: await responseCodesRepository.findByCode(code), ...data });
};

module.exports = { buildResponse };