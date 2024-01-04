const movieController = require('../controllers/movieController.js')
const express = require('express')
const userController = require('../controllers/userController.js');

module.exports = (app) => {
    app.use(express.json());
    app.use('/user',userController)
    app.use('/movie', movieController)
}