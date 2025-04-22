const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  firstName: { 
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'] 
  },
  dob: { 
    type: Date, 
    required: true 
  },
  department: { 
    type: String, 
    required: true 
  },
  enrollmentYear: { 
    type: Number, 
    required: true 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  }
}, {
  timestamps: true
});


const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = Student;
