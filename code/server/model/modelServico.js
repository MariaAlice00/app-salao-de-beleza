const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    products: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const Servicedb = mongoose.model('servicedb', schema)

module.exports = Servicedb

