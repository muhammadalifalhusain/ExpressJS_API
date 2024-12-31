const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // Mengimpor controller

// Definisikan routes untuk register dan login
router.post('/register', register);
router.post('/login', login);

module.exports = router; // Mengekspor router