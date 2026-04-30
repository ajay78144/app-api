const express = require('express');
const router = express.Router();

const {
  createImage,
  getImages,
  getSingleImage,
  updateImage,
  deleteImage,
} = require('../controllers/imageController');

const auth = require('../middleware/auth');

// ➕ CREATE
router.post('/', auth, createImage);

// 📥 GET ALL
router.get('/', getImages);

// 🔍 GET SINGLE
router.get('/:id', getSingleImage);

// ✏️ UPDATE
router.put('/:id', auth, updateImage);

// ❌ DELETE
router.delete('/:id', auth, deleteImage);

module.exports = router;