const homeController = require("express").Router()

    homeController.get('/', (req,res) => {
        res.status(200).json({message : 'Test'})
    })

    module.exports = homeController