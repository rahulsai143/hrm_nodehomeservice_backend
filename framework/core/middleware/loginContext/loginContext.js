const login = require('../../login/login');

const loginContextMiddleware = async (req, res, next) => {
  const user =  await login.doLogin(req, res, next);
  req.user = user;
  next();
};

module.exports = { loginContextMiddleware };
