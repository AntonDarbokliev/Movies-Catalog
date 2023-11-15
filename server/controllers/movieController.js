const movieService = require('../services/movieService.js')
const movieController = require('express').Router()



movieController.post("/", async (req,res) => {
    try{
        const createdMovie = await movieService.create(req.body,{})
        res.status(201).json(createdMovie)
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
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