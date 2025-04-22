const express = require('express');
const router = express.Router();
const Student = require('./Student'); 

router.get('/', async (req, res) => {
  try {
   
    const totalStudents = await Student.countDocuments();

    
    const deptCounts = await Student.aggregate([
      { $group: { _id: '$department', count: { $sum: 1 } } }
    ]);

    const yearCounts = await Student.aggregate([
      { $group: { _id: '$enrollmentYear', count: { $sum: 1 } } }
    ]);

    const departmentStats = deptCounts.length > 0 ? deptCounts : [];
    const yearStats = yearCounts.length > 0 ? yearCounts : [];

    res.json({
      totalStudents,
      departmentStats,
      yearStats,
    });
  } catch (error) {
    console.error('Error fetching enrollment stats:', error);
    res.status(500).json({ message: 'Failed to get stats' });
  }
});

module.exports = router;
