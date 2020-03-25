const express = require('express');

const router = express.Router();
const calendarController = require('../controllers/calendarController');

router.route('/sections')
  .get(calendarController.getSections)
  .post(calendarController.createSection)
  .delete(calendarController.deleteSection);

router.route('/users')
  .post(calendarController.createUser);

router.route('/users/:email')
  .get(calendarController.getUser);

module.exports = router;