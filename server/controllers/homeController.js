const movieService = require("../services/movieService.js")

const homeController = require("express").Router()

    homeController.get('/', async (req,res) => {
        try {
            console.log('a');
            const movies = await movieService.getAll()
            res.status(200).json(movies)
        } catch (error) {
            console.log(error);
        }
    })

    module.exports = homeController