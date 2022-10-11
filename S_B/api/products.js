const express = require('express');
const router = express.Router();
const users = require('../../S_A/api/users')
const usersList = users.getUsers();

const productsList = [
    {
        id: 1,
        product: { id: 1, name: "Produto 1", price: "1.000" },
        login: 'eduarda.bolgenhagen',
        password: '123'
    },
    {
        id: 2,
        product: { id: 2, name: "Produto 2", price: "1.000" },
        login: 'bruno.henrique',
        password: '123'
    }
];

//get products List
router.get('/', (req, res) => {
    res.send(getProducts());
});

function getProducts() {
    return productsList;
}

//get login
// router.get('/login', (req, res) => {
//     const user = req.body;
//     res.send(getLogin(user));
// });

// function getLogin(user) {
//     let autorized;
//     for (let users of usersList) {
//         if (users.login == user.login && users.password == user.password) {
//             autorized = true;
//             return autorized;
//         } else {
//             autorized = false;
//             return autorized;
//         }
//     }
// };

//post products
router.post('/', (req, res) => {
    const product = req.body;
    const user = {
        login: product.login,
        password: product.password
    }

    if(users.getLogin(user)){
        console.log('pode cadastrar')
    } else {
        console.log('nao pode')
    }
});

function postUser(user) {
    user.id = usersList.length + 1;
    usersList.push(user);
    return usersList;
}

//delete user
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(deleteUser(id));
});

function deleteUser(id) {
    const index = usersList.findIndex(user => user.id == id);
    usersList.splice(index, 1);
    return usersList;
}

module.exports = {
    router,
    postUser,
    deleteUser
}