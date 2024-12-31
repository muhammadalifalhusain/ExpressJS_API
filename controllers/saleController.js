const Product = require('../models/Product');
const Sale = require('../models/Sale');

const sellProduct = async(req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    const sale = new Sale({
        productId,
        quantity,
        totalPrice: product.price * quantity,
    });

    await sale.save();
    res.status(201).json({ message: 'Sale completed' });
};

module.exports = { sellProduct };