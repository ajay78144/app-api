const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController');

// 🔐 REGISTER (multiple allowed now)
router.post('/register', register);

// 🔐 LOGIN
router.post('/login', login);

module.exports = router;