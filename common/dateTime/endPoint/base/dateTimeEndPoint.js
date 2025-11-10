const router = require('express').Router();
const dateTimeService = require('./service/dateTimeService');

router.get('/dateTime', (request,response) => {
  try {
    response.dateTime = dateTimeService.getDateTime();
  } catch(error) {

  }
  response.json();
});