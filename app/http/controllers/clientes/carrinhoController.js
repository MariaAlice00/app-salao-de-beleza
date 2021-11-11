function carrinhoController() {
    return {
        index(req, res) {
            res.render('clientes/carrinho')
        }
    }
}

module.exports = carrinhoController