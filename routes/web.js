const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const carrinhoController = require('../app/http/controllers/clientes/carrinhoController')

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/carrinho', carrinhoController().index)
    
    app.get('/login', authController().login)

    app.get('/registro', authController().registro)
}

module.exports = initRoutes