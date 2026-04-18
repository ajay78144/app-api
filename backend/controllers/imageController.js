const Image = require('../models/Image');

// ➕ UPLOAD IMAGE
exports.uploadImage = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!req.file) {
      return res.status(400).json({ msg: "No file uploaded ❌" });
    }

    const image = new Image({
      imageUrl: `/uploads/${req.file.filename}`, // ✅ FIX
      categoryId,
    });

    await image.save();

    res.json({ message: 'Image Uploaded ✅', image });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📥 GET ALL IMAGES
exports.getImages = async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category) filter.categoryId = category;

    const images = await Image.find(filter).sort({ createdAt: -1 });

    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ DELETE IMAGE
exports.deleteImage = async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image Deleted ✅' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};