const Image = require('../models/Image');

// ➕ CREATE (UPLOAD IMAGE / URL)
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

// 📥 GET ALL IMAGES (with filter)
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

// ✏️ UPDATE IMAGE
exports.updateImage = async (req, res) => {

  try {

    const { categoryId, imageUrl } = req.body;

    const updateData = {};

    if (categoryId) updateData.categoryId = categoryId;

    // agar new file upload hui

    if (req.file) {

      updateData.imageUrl = req.file.filename;

    }

    // agar url diya

    else if (imageUrl) {

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

    res.status(500).json({ error: err.message });

  }

};

// ❌ DELETE IMAGE
exports.deleteImage = async (req, res) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.json({ message: 'Image Deleted ❌' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};