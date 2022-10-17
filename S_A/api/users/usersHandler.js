const crud = require('../../crud/index');

async function saveUsers(user) {
    return await crud.save('Users', undefined, user);
};

async function getUsers() {
    return await crud.get('Users');
};

async function getByIdUsers(id) {
    return await crud.getById('Users', id);
};

async function removeUsers(CPF) {
    return await crud.remove('Users', CPF);
};

module.exports = {
    saveUsers,
    getUsers,
    getByIdUsers,
    removeUsers
};