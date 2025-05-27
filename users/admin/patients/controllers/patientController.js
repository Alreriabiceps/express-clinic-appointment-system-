const Patient = require('../models/Patient');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createPatient = async (req, res) => {
  const { name, dob, gender, phone, email, address } = req.body;
  if (!name || !dob || !gender || !phone || !email || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const patient = await Patient.create({ name, dob, gender, phone, email, address });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Patient not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const removed = await Patient.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: 'Patient not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}; 