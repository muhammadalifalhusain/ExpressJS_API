const Sale = require('../models/Sale');

const processPayment = async(req, res) => {
    const { salesId, shippingPackage } = req.body;
    const sale = await Sale.findById(salesId);

    if (!sale) return res.status(404).json({ message: 'Sale not found' });

    const shippingCosts = {
        standard: 5,
        express: 10,
    };

    const shippingCost = shippingCosts[shippingPackage];
    const totalAmount = sale.totalPrice + shippingCost;

    res.json({ totalAmount, shippingCost });
};

module.exports = { processPayment };