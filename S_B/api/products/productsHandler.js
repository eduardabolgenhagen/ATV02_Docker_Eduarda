const crud = require('../../crud/index');
const userHandler = require('../../../S_A/api/users/usersHandler');

async function saveProducts(product) {
    console.log(product.password)
    const rtn = await userHandler.login(product.password, product.userCPF);


    console.log(rtn);

    if (!rtn) {
        console.log('Login não efetivado com sucesso, tente novamente.')
    } 

    // console.log('liberado para cadatrar produto')

    // return await crud.save('Products', undefined, product);
};

async function getProducts() {
    return await crud.get('Products');
};

async function getByIdProducts(id) {
    return await crud.getById('Products', id);
};

async function removeProducts(id) {
    return await crud.remove('Products', id);
};

module.exports = {
    saveProducts,
    getProducts,
    getByIdProducts,
    removeProducts
};