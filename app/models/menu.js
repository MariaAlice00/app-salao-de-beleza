const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)