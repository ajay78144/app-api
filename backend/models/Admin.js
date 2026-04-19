const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // ✅ duplicate email prevent
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // optional but good

module.exports = mongoose.model("Admin", adminSchema);