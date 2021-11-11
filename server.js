const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000

// Assets
app.use(express.static('public'))

// Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')

// Rotas
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/carrinho', (req, res) => {
    res.render('clientes/carrinho')
})

app.get('/login', (req, res) => {
    res.render('auth/login')
})
app.get('/registro', (req, res) => {
    res.render('auth/registro')
})

// Run
app.listen(PORT, () => {
    console.log(`App running in http://localhost:${PORT}`)
})