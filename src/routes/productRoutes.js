// src/routes/productRoutes.js
const express = require('express');
const {
  createNewProduct,
  updateProductInventory,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

// Route for creating a new product
router.post('/products', createNewProduct);

// Route for updating product inventory
router.put('/products/inventory', updateProductInventory);

// Route for getting all products
router.get('/products', getAllProducts);

// Route for getting a single product by ID
router.get('/products/:id', getProductById);

// Route for updating a product
router.put('/products/:id', updateProduct);

// Route for deleting a product
router.delete('/products/:id', deleteProduct);

module.exports = router;
