const express = require('express');
const router = express.Router();

const {
  addCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const auth = require('../middleware/auth');

// ➕ CREATE
router.post('/', auth, addCategory);

// 📥 GET ALL
router.get('/', getCategories);

// 🔍 GET SINGLE (FIND)
router.get('/:id', getSingleCategory);

// ✏️ UPDATE
router.put('/:id', auth, updateCategory);

// ❌ DELETE
router.delete('/:id', auth, deleteCategory);

module.exports = router;