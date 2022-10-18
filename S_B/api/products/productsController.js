const express = require('express');
const router = express.Router();
const productsHandler = require('../products/../products/productsHandler');

//save
router.post('/', async (req, res) => {
    const product = req.body;
    res.json(await productsHandler.saveProducts(product));
});

//get
router.get('/', async (req, res) => {
    res.json(await productsHandler.getProducts());
});

//get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await productsHandler.getByIdProducts(id));
});

//delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await productsHandler.removeProducts(id));
});

module.exports = router;
