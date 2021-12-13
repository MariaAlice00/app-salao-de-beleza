const Menu = require('../../models/menu')

function homeController() {
    return {
        async index(req, res) {
            const servicos = await Menu.find()
            // console.log(servicos)
            return res.render('home', { servicos: servicos })
        }
    }
}

module.exports = homeController