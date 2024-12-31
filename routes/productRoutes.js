const express = require('express');
const router = express.Router();
const { addProduct, getProductDetails, uploadProductPhoto } = require('../controllers/productController'); // Mengimpor controller

// Definisikan routes untuk menambah produk dan melihat detail produk
router.post('/add', uploadProductPhoto, addProduct);
router.get('/:id', getProductDetails);

module.exports = router; // Mengekspor router