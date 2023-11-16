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

        const movieName = req.query.name;
        const movieGenres = (req.query.genres)?.split('-'); // Assuming this is an array(may have to adjust later)

        if(movieName || movieGenres){
            const movies = await movieService.movieSearch(movieName,movieGenres)
            res.status(200).json(movies)
        }else{
            const movies = await movieService.getAll()
            res.status(200).json(movies)
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = movieController