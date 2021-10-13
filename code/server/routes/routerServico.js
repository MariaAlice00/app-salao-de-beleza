const express = require('express')
const route = express.Router()
const services = require('../services/renderServico')
const controller = require('../controller/controllerServico')

/**
    * @description Root Route
    * @method GET /
*/

route.get('/', services.homeRoutes)

/**
    * @description add services
    * @method GET /add-service
*/

route.get('/add-service', services.add_service)

/**
    * @description for update service
    * @method GET /update-service
*/

route.get('/update-service', services.update_service)

// API
route.post('/api/services', controller.create)
route.get('/api/services', controller.find)
route.put('/api/services/:id', controller.update)
route.delete('/api/services/:id', controller.delete)

module.exports = route