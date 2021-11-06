const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const exp = require('constants')
const PORT = process.env.PORT || 3000

// Assets
app.use(express.static('public'))

// Rotas
app.get('/', (req, res) => {
    res.render('home')
})

// Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')

// Run
app.listen(PORT, () => {
    console.log(`App running in http://localhost:${PORT}`)
})