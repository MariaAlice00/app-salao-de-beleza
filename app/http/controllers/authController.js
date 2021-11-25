const User = require('../../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')

function authController() {
    const _getRedirectUrl = (req) => {
        return req.user.role === 'admin' ? '/admin/orders' : '/customer/orders'
    }

    return {
        login(req, res) {
            res.render('auth/login')
        },

        postLogin(req, res, next) {
            const { email, password }   = req.body
           // Validar request 
            if(!email || !password) {
                req.flash('error', 'Todos os campos são necessários')
                return res.redirect('/login')
            }
            passport.authenticate('local', (err, user, info) => {
                if(err) {
                    req.flash('error', info.message)
                    return next(err)
                }
                if(!user) {
                    req.flash('error', info.message)
                    return res.redirect('/login')
                }
                req.logIn(user, (err) => {
                    if(err) {
                        req.flash('error', info.message)
                        return next(err)
                    }
                    return res.redirect(_getRedirectUrl(req))
                })
            })(req, res, next)
        },

        register(req, res) {
            res.render('auth/register')
        },

        async postRegister(req, res) {
            const { name, email, password } = req.body
            // Validate request
            if(!name || !email || !password) {
                req.flash('error', 'Todos os campos são necessários')
                req.flash('name', name)
                req.flash('email', email)
                return res.redirect('/register')
            }
             // Checar se email existe
             User.exists({ email: email }, (err, result) => {
                if(result) {
                    req.flash('error', 'E-mail já recebido')
                    req.flash('name', name)
                    req.flash('email', email)  
                    return res.redirect('/register')
                }
            })

            // senha hash
            const hashedPassword = await bcrypt.hash(password, 10)

            // Criar usuário
            const user = new User({
                name,
                email,
                password: hashedPassword
            })

            user.save().then(() => {
                // Login
                return res.redirect('/')
            }).catch(err => {
                req.flash('error', 'Algo deu errado')
                return res.redirect('/register')
            })
        },
        
        logout(req, res) {
            req.logout()
            return res.redirect('/login')
        }
    }
}

module.exports = authController