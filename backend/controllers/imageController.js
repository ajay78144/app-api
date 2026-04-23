const Image = require('../models/Image');

// ➕ CREATE
exports.createImage = async (req, res) => {
  try {
    const { categoryId, imageUrl } = req.body;

    let finalImage = imageUrl;

    if (req.file) {
      finalImage = req.file.filename;
    }

    const image = new Image({
      imageUrl: finalImage,
      categoryId,
    });

    await image.save();

    res.json({ message: 'Image Uploaded ✅', image });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📥 GET ALL
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

// 🔍 GET SINGLE IMAGE (FIND)
exports.getSingleImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found ❌" });
    }

    res.json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ UPDATE
exports.updateImage = async (req, res) => {

  console.log("PUT API Hit", req.params.id, req.body, req.file);

  try {
    const { categoryId, imageUrl } = req.body;

    const updateData = {};

    if (categoryId) updateData.categoryId = categoryId;

    if (req.file) {
      updateData.imageUrl = req.file.filename;
    } else if (imageUrl) {
      updateData.imageUrl = imageUrl;
    }

    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found ❌" });
    }

    res.json({ message: 'Image Updated ✅', updatedImage });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// ❌ DELETE
exports.deleteImage = async (req, res) => {
  try {
    const deleted = await Image.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Image not found ❌" });
    }

    res.json({ message: 'Image Deleted ❌' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};