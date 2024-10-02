const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true 
  },
  type: { 
    type: String,
    required: true 
  }, 
  price: { 
    type: Number, 
    required: true 
  }, 
  stock: { 
    type: Number, 
    required: true 
  }, 
  created_at: { 
    type: Date, 
    default: Date.now 
  }, 
  updated_at: { 
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
