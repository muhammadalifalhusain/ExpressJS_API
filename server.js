const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Mengimpor fungsi connectDB
const authRoutes = require('./routes/authRoutes'); // Mengimpor router authRoutes
const productRoutes = require('./routes/productRoutes'); // Mengimpor router productRoutes
const saleRoutes = require('./routes/saleRoutes'); // Mengimpor router saleRoutes
const paymentRoutes = require('./routes/paymentRoutes'); // Mengimpor router paymentRoutes
const path = require('path');

dotenv.config(); // Memuat variabel lingkungan
connectDB(); // Menghubungkan ke MongoDB

const app = express();
app.use(express.json()); // Menambahkan middleware untuk parsing JSON

// Menggunakan router untuk berbagai endpoint
app.use('/auth', authRoutes); // Memastikan router diimpor dengan benar
app.use('/product', productRoutes);
app.use('/sale', saleRoutes);
app.use('/payment', paymentRoutes);

// Menjalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});