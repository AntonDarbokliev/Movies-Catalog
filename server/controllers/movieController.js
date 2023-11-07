const movieService = require('../services/movieService.js')
const movieController = require('express').Router()



movieController.post("/", async (req,res) => {
    try{
        await movieService.create(req.body,{})
        res.end()
    }catch(err){
        console.log(err);
    }
})

movieController.get('/', async (req,res) => {
    try {
        const movies = await movieService.getAll()
        res.status(200).json(movies)
    } catch (error) {
        console.log(error);
    }
})

module.exports = movieController