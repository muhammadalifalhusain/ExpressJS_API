const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;