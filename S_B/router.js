const express = require("express");
const router = express.Router();

const products = require('./api/products/productsController');

router.use('/products', products);

module.exports = router;