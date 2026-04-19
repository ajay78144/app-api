const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // 🔹 Authorization header lo
    const authHeader = req.header('Authorization');

    // ❌ Agar token hi nahi hai
    if (!authHeader) {
      return res.status(401).json({ msg: 'No token provided ❌' });
    }

    // 🔹 "Bearer TOKEN" se TOKEN extract karo
    const token = authHeader.split(' ')[1];

    // ❌ Agar token missing hai
    if (!token) {
      return res.status(401).json({ msg: 'Token format wrong ❌' });
    }

    // 🔥 VERIFY TOKEN (MOST IMPORTANT)
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'secretkey'
    );

    // 🔹 user data attach karo
    req.user = decoded;

    next();
  } catch (err) {
    console.log("Auth Error:", err.message); // debug ke liye

    res.status(401).json({ msg: 'Invalid token ❌' });
  }
};