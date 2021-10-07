const axios = require('axios')

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/services
    axios.get('http://localhost:3000/api/services')
        .then(function(response) {
            res.render('index', {services: response.data})
        })
        .catch(err => {
            res.send(err)
        })
}

exports.add_service = (req, res) => {
    res.render('add_service')
}

exports.update_service = (req, res) => {
    axios.get('http://localhost:3000/api/services', {params: {id: req.query.id}})
        .then(function(servicedata){
            res.render('update_service', {service: servicedata.data})
        })
        .catch(err => {
            res.send(err)
        })
}
