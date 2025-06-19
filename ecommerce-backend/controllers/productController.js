const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const image = req.file ? req.file.filename : null; // multer sets this

    const product = new Product({
      name,
      category,
      price,
      description,
      image, // store filename (or full path if you prefer)
    });

    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params);
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    console.log(product);
    if (product) res.json(product);
    else res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (deleted) res.json({ message: 'Product deleted' });
    else res.status(404).json({ message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};