const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const studentRoutes = require('./studentRoutes');
const statsRoutes = require('./stats');
const studentModel = require('./Student');
app.use('/api/students', studentRoutes);
app.use('/api/stats', statsRoutes);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(' MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Mongo connection failed:', err);
});
