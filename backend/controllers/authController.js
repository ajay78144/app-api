const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 🔐 REGISTER (only first time use)
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // ✅ check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ msg: 'Admin already exists ❌' });
    }

    // ✅ hash password
    const hashed = await bcrypt.hash(password, 10);

    // ✅ create admin
    const admin = new Admin({
      email,
      password: hashed,
    });

    await admin.save();

    res.json({ message: 'Admin Registered ✅' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔐 LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'User not found ❌' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Wrong password ❌' });
    }

    // ✅ use env secret
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful ✅',
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};