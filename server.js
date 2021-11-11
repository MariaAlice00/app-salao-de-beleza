require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')

// Database connection
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    try {
        console.log('Banco de dados conectado...');
    }catch(err) {
        console.log('Conexão falhou...')
    }
})

// Assets
app.use(express.static('public'))

// Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')

// Rotas
require('./routes/web')(app)

// Run
app.listen(PORT, () => {
    console.log(`App running in http://localhost:${PORT}`)
})