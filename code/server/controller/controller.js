var Servicedb = require('../model/model')

// create and save new service
exports.create = (req, res) => {
    // validate request
    if(!req.body) {
        res.status(400).send({message: 'Content can not be emtpy!'})
        return
    }

    // new service
    const service = new Servicedb({
        type: req.body.type,
        duration: req.body.duration,
        products: req.body.products,
        price: req.body.price
    })

    // save service in the database
    service
        .save(service)
        .then(data => {
            // res.send(data)
            res.redirect('/add-service')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating a create operation'
            })
        })
}

// retrieve and return all services / retrive and return a single service
exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id

        Servicedb.findById(id)
            .then(data => {
                if(!data) {
                    res.status(404).send({message: `Not found service with ${id}`})
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: `Erro retrieving service with id ${id}`})
            })
    } else {
        Servicedb.find()
        .then(service => {
            res.send(service)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'Error occurred while retriving service information'})
        })
    }
}

// update a new identified service by service id
exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: 'Data to update can not be empty'})
    }

    const id = req.params.id
    Servicedb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot update service with ${id}. Maybe service not found!`})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: 'Error update service information'})
        })
}

// delete a service with specified service id in the request
exports.delete = (req, res) => {
    const id = req.params.id

    Servicedb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot delete with id ${id}. Maybe id is wrong.`})
            } else {
                res.send({message: 'Service was deleted successfully!'})
            }
        })
        .catch(err => {
            res.status(500).send({message: `Could note delete service with id = ${id}`})
        })
}