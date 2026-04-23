const Category = require('../models/Category');

// ➕ CREATE
exports.addCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const category = new Category({ name, image });
    await category.save();

    res.json({ message: 'Category Added ✅', category });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📥 GET ALL
exports.getCategories = async (req, res) => {
  try {
    const data = await Category.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 GET SINGLE (FIND)
exports.getSingleCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found ❌" });
    }

    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ UPDATE
exports.updateCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { name, image },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Category not found ❌" });
    }

    res.json({ message: 'Category Updated ✅', updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ DELETE
exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Category not found ❌" });
    }

    res.json({ message: 'Category Deleted ❌' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};