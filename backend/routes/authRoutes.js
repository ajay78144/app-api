const express = require('express');
const router = express.Router();

// import controller
const { register, login } = require('../controllers/authController');

// 🔐 REGISTER (only first time use)
router.post('/register', register);

// 🔐 LOGIN
router.post('/login', login);

module.exports = router;