const commentService = require("../services/commentService.js");
const movieService = require("../services/movieService.js");
const { vote, getVotesForMovie } = require("../services/voteService.js");
const errorHandler = require("../utils/errorHandler.js");
const movieController = require("express").Router();

movieController.post("/", async (req, res) => {
  try {
    const createdMovie = await movieService.create(req.body);
    res.status(201).json(createdMovie);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(500).json(errObj);
  }
});

movieController.get("/", async (req, res) => {
  try {
    const movieName = req.query.name;
    const movieGenres = req.query.genres?.split("-");
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 8;
    const skip = (page - 1) * pageSize;

    const movies = await movieService.movieSearch(
      movieName,
      movieGenres,
      skip,
      pageSize
    );
    res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

movieController.get('/latest',async (req,res) => {
    try {
        const movies = await movieService.getLatest()
        res.status(200).json(movies)
    } catch (err) {
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'})
    }
})

movieController.post("/comment", async (req, res) => {
  try {
    if(!req.body._id){
      throw new Error('You should be logged in to comment')
    }
    const comment = await commentService.create(req.body);
    res.status(201).json(comment);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(500).json(errObj);
  }
});

movieController.get("/comment", async (req, res) => { 
  try {
    const comments = await commentService.getAll();
    res.status(201).json(comments);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(500).json(errObj);
  }
});

movieController.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await movieService.getOne(movieId);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ error: "Movie was not found" });
  }
});

movieController.put("/:id", async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await movieService.getOne(movieId);
    if (movie.owner.id.toString() !== req.body.userId)
      throw new Error("You are not the owner of this movie");

    const result = await movieService.update(movieId, req.body.movieData);
    res.status(202).json(result);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(404).json(errObj);
  }
});

movieController.delete("/:id", async (req, res) => {
  const movieId = req.params.id;
  const userId = req.body.userId;
  try {
    const movie = await movieService.getOne(movieId);
    if (userId !== movie.owner.id.toString())
      throw new Error("You are not the owner of this movie");
    const result = await movieService.del(movieId);
    res.status(200).json(result);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(404).json(errObj);
  }
});

movieController.post("/vote", async (req, res) => {
  try {
    const currentVote = await vote(req.body);
    res.json(currentVote);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(500).json(errObj);
  }
});

movieController.get("/vote/:id", async (req, res) => {
  try {
    const currentVotes = await getVotesForMovie(req.params.id);
    res.json(currentVotes);
  } catch (err) {
    const errObj = errorHandler(err);
    res.status(500).json(errObj);
  }
});

module.exports = movieController;
