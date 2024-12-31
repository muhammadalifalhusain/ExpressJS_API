const express = require('express');
const router = express.Router();
const { sellProduct } = require('../controllers/saleController');

router.post('/sell', sellProduct);

module.exports = router;