const mongoose = require('mongoose');

const endSession = async (session) => {
  if (!session.hasEnded) {
    session.hasEnded = true;
    await Promise.all([session.abortTransaction(), session.endSession()]);
  }
};
      
const sessionContextMiddleware = async (req, res, next) => {
  req.session = await mongoose.startSession();
  req.session.startTransaction();
      
  res.on('close', () => endSession(req.session));
  res.on('finish', () => endSession(req.session));
  
  await next();
  if (!req.session.hasEnded) await endSession(req.session);
};

module.exports = { sessionContextMiddleware };
