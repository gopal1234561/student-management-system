const Student = require('./Student');

const createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ studentId: 1 });
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ error: 'Student not found' });
    res.status(200).json({ message: 'Student deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getStudentStats = async (req, res) => {
  try {
    const students = await Student.find();

    const totalStudents = students.length;

    const departmentStats = {};
    const yearStats = {};

    students.forEach(student => {
      departmentStats[student.department] = (departmentStats[student.department] || 0) + 1;
      yearStats[student.enrollmentYear] = (yearStats[student.enrollmentYear] || 0) + 1;
    });

    res.json({ totalStudents, departmentStats, yearStats });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  getStudentStats 
};
