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

async function removeUsers(id) {
    return await crud.remove('Users', id);
};

async function login(userPassword, userCPF){
    const listUsers = await getUsers();

    for(users of listUsers){
        console.log("CPF que passei: ", userCPF);
        console.log("CPF que veio: ", users.CPF);
        console.log("password que passei: ", userPassword);
        console.log("password que veio: ", users.password);
        if(users.CPF == userCPF && users.password == userPassword){
            return true;
        }
    }
    console.log("ele que nao pode cadastrar")
    return false;
}

module.exports = {
    saveUsers,
    getUsers,
    getByIdUsers,
    removeUsers,
    login
};