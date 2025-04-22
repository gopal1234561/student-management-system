const express = require('express');
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
  getStudentStats 
} = require('./studentController');

router.get('/stats', getStudentStats);
router.post('/', createStudent);

router.get('/', getAllStudents);

router.get('/:id', getStudentById);

router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;

