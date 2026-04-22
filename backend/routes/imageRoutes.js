const express = require('express');
const router = express.Router();

const upload = require('../utils/multer');
const {
  createImage,
  getImages,
  updateImage,
  deleteImage,
} = require('../controllers/imageController');

const auth = require('../middleware/auth');

// ➕ CREATE (upload image / url)
router.post('/', auth, upload.single('image'), createImage);

// 📥 GET (all images / filter)
router.get('/', getImages);

// ✏️ UPDATE
router.put('/:id', auth, upload.single('image'), updateImage);

// ❌ DELETE
router.delete('/:id', auth, deleteImage);

module.exports = router;