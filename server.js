require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const patientRoutes = require('./users/admin/patients/routes/patientRoutes');
app.use('/api/admin/patients', patientRoutes);

const adminAuthRoutes = require('./users/admin/profile/routes/authRoutes');
app.use('/api/admin/auth', adminAuthRoutes);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
