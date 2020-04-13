const express = require('express');

const router = express.Router();
const students = require('../controllers/students');

router.route('')
  .get(students.getStudents)
  .post(students.createStudent);

router.route('/:email')
  .get(students.getStudent)
  .delete(students.deleteStudent);

module.exports = router;
