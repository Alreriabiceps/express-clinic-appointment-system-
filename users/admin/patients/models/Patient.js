const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient; 