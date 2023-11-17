const Movie = require("../models/Movie.js");

async function create(movieData, userId) {
  const movie = {
    name: movieData.name,
    director: movieData.director,
    year: movieData.year,
    topCast: movieData.topCast,
    moviePoster: movieData.moviePoster,
    movieImages: movieData.movieImages,
    description: movieData.description,
    genres: movieData.genres,
    movieTrailer: movieData.movieTrailer,
    upvotes: [], //TODO: Make upvotes/downvotes work
    downvotes: [],
    // owner : userId
  };

  const result = await Movie.create(movie);

  return result;
}

async function getAll() {
  return Movie.find({}).lean().populate("upvotes").populate("downvotes");
}

async function getOne(id) {
  return Movie.findById(id)
}

async function movieSearch(movieName, movieGenres) {

  if (!!movieName && movieGenres[0]!=='') {
    const movies = await Movie.find({
      name: {$regex : new RegExp(movieName,'i')},
      genres: { $in: movieGenres },
    });
    if (!movies) {
      throw new Error("No movies were found");
    }
    return movies;
  } else if (!!movieName) {
    const movies = await Movie.find({ name: {$regex : new RegExp(movieName,'i')} });
    if (!movies) {
      throw new Error("No movies were found");
    }
    return movies;
  } else if (movieGenres[0]!=='') {
    const movies = await Movie.find({ genres: { $in: movieGenres } });
    if (!movies) {
      throw new Error("No movies were found");
    }

    return movies;
  } else {
    throw new Error("No search parameters were specified"); //Should be impossible to get here (i just did it anyway)
  }

}

module.exports = {
  create,
  getAll,
  movieSearch,
  getOne
};
