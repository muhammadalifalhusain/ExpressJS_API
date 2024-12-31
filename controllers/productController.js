const Product = require('../models/Product');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Setup Multer untuk upload foto produk
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Folder untuk menyimpan foto produk
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk nama unik
    }
});

const upload = multer({ storage: storage });

// Fungsi untuk menambah produk
const addProduct = async(req, res) => {
    const { name, price, description } = req.body;
    const photo = req.file ? req.file.filename : null; // Mengambil nama foto yang di-upload

    if (!photo) {
        return res.status(400).json({ message: 'Foto produk diperlukan' });
    }

    const newProduct = new Product({
        name,
        price,
        description,
        photo
    });

    await newProduct.save();
    res.status(201).json({ message: 'Produk berhasil ditambahkan', product: newProduct });
};

// Fungsi untuk melihat detail produk
const getProductDetails = async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });
    res.json(product);
};

// Menggunakan multer untuk upload foto produk
const uploadProductPhoto = upload.single('photo');

module.exports = { addProduct, getProductDetails, uploadProductPhoto };