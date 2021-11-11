function authController() {
    return {
        login(req, res) {
            res.render('auth/login')
        },
        registro(req, res) {
            res.render('auth/registro')
        }
    }
}

module.exports = authController