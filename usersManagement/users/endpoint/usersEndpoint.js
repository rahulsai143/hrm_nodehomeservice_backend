const express = require('express'),
  router = express.Router(),
  usersServiceFactory = require('../service/usersServiceFactory');

router.post('/',async (req,res) => {
  try {
    const session = req.session;
    const userDTO = req.body;
    await ( await usersServiceFactory.fetchUsersService()).createUser(session, userDTO);

  } catch(exception) {

  }
});

router.get('/',async (req,res) => {
  try {
    const session = req.session;
    const userDTO = req.body;
    await ( await usersServiceFactory.fetchUsersService()).createUser(session, userDTO);

  } catch(exception) {

  }
});

module.exports = router;