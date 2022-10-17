const express = require('express');
const router = express.Router();
const usersHandler = require('../users/usersHandler');

//save
router.post('/', async (req, res) => {
    const user = req.body;
    res.json(await usersHandler.saveUsers(user));
});

//get
router.get('/', async (req, res) => {
    res.json(await usersHandler.getUsers());
});

//get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await usersHandler.getByIdUsers(id));
});

//delete
router.delete('/:CPF', async (req, res) => {
    const CPF = req.params.CPF;
    console.log(CPF)
    res.json(await usersHandler.removeUsers(CPF));
});

module.exports = router;
