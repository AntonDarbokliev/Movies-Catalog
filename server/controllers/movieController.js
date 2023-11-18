const movieService = require('../services/movieService.js')
const movieController = require('express').Router()



movieController.post("/", async (req,res) => {
    try{
        const createdMovie = await movieService.create(req.body)
        res.status(201).json(createdMovie)
    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

movieController.get('/', async (req,res) => {
    try {

        const movieName = req.query.name;
        const movieGenres = (req.query.genres)?.split('-');
        
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

movieController.get('/:id',async (req,res) => {
    const movieId = req.params.id
    try {
        const movie = await movieService.getOne(movieId)
        res.status(200).json(movie)
    } catch (error) {
        res.status(404).json({error: 'Movie was not found'})
    }
})


movieController.put('/:id',async (req,res) => {
    const movieId = req.params.id
    try {
        const result = await movieService.update(movieId,req.body)
        res.status(202).json(result)
    } catch (error) {
        console.error(error);
        res.status(404).json(error)
    }
})

module.exports = movieController