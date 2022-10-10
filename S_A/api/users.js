const express = require('express');
const router = express.Router();

const usersList = [
    {
        id: 1,
        login: 'eduarda.bolgenhagen',
        password: '123'
    },
    {
        id: 2,
        login: 'bruno.henrique',
        password: '123'
    }
];

//get users List
router.get('/', (req, res) => {
    res.send(getUsers());
});

function getUsers() {
    return usersList;
}

//get login
router.get('/login', (req, res) => {
    const user = req.body;
    res.send(getLogin(user));
});

function getLogin(user) {
    let autorized;
    for (let users of usersList) {
        if (users.login == user.login && users.password == user.password) {
            autorized = true;
            return autorized;
        } else {
            autorized = false;
            return autorized;
        }
    }
};

//post users
router.post('/', (req, res) => {
    const user = req.body;
    if (user.login != "" && user.password != "") {
        res.send(postUser(user));
    } else {
        console.log("Erro ao criar usuário.")
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
    getUsers,
    getLogin,
    postUser,
    deleteUser
}