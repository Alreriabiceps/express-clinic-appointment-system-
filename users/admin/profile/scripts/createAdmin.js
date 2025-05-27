const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI;

async function createAdmin() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const email = 'admin@example.com';
  const password = 'admin1234'; // Change this to a secure password in production

  try {
    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log('Admin already exists.');
      process.exit(0);
    }
    const admin = new Admin({ email, password });
    await admin.save();
    console.log('Admin account created:', email);
  } catch (err) {
    console.error('Error creating admin:', err.message);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin(); 