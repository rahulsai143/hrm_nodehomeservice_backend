const express = require('express'),
  router = express.Router(),
  destinationsServiceFactory = require('../service/destinationsServiceFactory');

router.get('/',async (req,res) => {
  try {
    await (await destinationsServiceFactory.fetchService()).listDestinations(req,res);
  } catch(exception) {

  }
});

module.exports = router;