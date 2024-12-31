const mongoose = require('mongoose');

// Fungsi untuk menghubungkan ke MongoDB
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Keluar dari aplikasi jika gagal terhubung
    }
};

module.exports = connectDB; // Pastikan Anda mengekspor fungsi ini