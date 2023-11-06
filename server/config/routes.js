const cookieParser = require('cookie-parser')
const homeController = require('../controllers/homeController.js')
const movieController = require('../controllers/movieController.js')
const express = require('express')

module.exports = (app) => {
    app.use(cookieParser())
    app.use(express.json());
    app.use(homeController)
    app.use('/movie', movieController)
}