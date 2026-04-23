const express = require('express');
const router = express.Router();

const upload = require('../utils/multer');
const {
  createImage,
  getImages,
  getSingleImage, // 👈 ADD
  updateImage,
  deleteImage,
} = require('../controllers/imageController');

const auth = require('../middleware/auth');

// ➕ CREATE
router.post('/', auth, upload.single('image'), createImage);

// 📥 GET ALL
router.get('/', getImages);

// 🔍 GET SINGLE (FIND)
router.get('/:id', getSingleImage);

// ✏️ UPDATE
router.put('/:id', auth, upload.single('image'), updateImage);

// ❌ DELETE
router.delete('/:id', auth, deleteImage);

module.exports = router;