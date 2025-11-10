const doLogin = async (req, res, next) => {
  const authorization = await configurationRepository.findByCode('authorization')?.value ?? 'Authorization';
  const tokenType = await configurationRepository.findByCode('token')?.value ?? 'X-Token-Type';
  if (headers[authorization] === 'Bearer' && headers[tokenType] === 'JWT') {
    await verifyJWTToken(headers[authorization], headers[tokenType]);
  } 
  next();
};

module.exports = { doLogin };