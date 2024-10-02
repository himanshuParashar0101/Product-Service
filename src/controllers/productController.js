const Product = require('../models/productModel');

// Create a new product
exports.createNewProduct = async (req, res) => {
  try {
    console.log("🟢 Incoming request to create a new product:", req.body);
    const product = new Product(req.body);  // Assuming you are using a `Product` model here
    await product.save();
    console.log("✅ Product created successfully:", product);
    res.status(201).json(product);
  } catch (error) {
    console.error("❌ Error creating product:", error.message);
    res.status(400).json({ error: 'Failed to create product' });
  }
};

// Update product inventory
exports.updateProductInventory = async (req, res) => {
  console.log("🟢 Incoming request to update inventory:", req.body);
  const { productId, quantity } = req.body;
  try {
    const updatedProduct = await updateInventory(productId, quantity);
    console.log("✅ Inventory updated successfully for product:", updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("❌ Error updating inventory:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  console.log("🟢 Request to get all products");
  try {
    const products = await Product.find();
    console.log("✅ Retrieved all products:", products);
    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  console.log(`🟢 Request to get product by ID: ${req.params.id}`);
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      console.log("❌ Product not found with ID:", req.params.id);
      return res.status(404).json({ error: 'Product not found' });
    }
    console.log("✅ Retrieved product:", product);
    res.status(200).json(product);
  } catch (error) {
    console.error("❌ Error fetching product by ID:", error.message);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  console.log(`🟢 Request to update product with ID: ${req.params.id}`);
  try {
    const product = await Product.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!product) {
      console.log("❌ Product not found with ID:", req.params.id);
      return res.status(404).json({ error: 'Product not found' });
    }
    console.log("✅ Updated product:", product);
    res.status(200).json(product);
  } catch (error) {
    console.error("❌ Error updating product:", error.message);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  console.log(`🟢 Request to delete product with ID: ${req.params.id}`);
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id });
    if (!product) {
      console.log("❌ Product not found with ID:", req.params.id);
      return res.status(404).json({ error: 'Product not found' });
    }
    console.log("✅ Deleted product:", product);
    res.status(204).send(); // No content response
  } catch (error) {
    console.error("❌ Error deleting product:", error.message);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
