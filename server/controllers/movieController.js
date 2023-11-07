const movieService = require('../services/movieService.js')

const movieController = require('express').Router()



movieController.post("/movie", async (req,res) => {
    await movieService.create(req.body,{})
})

module.exports = movieController