const Movie = require("../models/Movie.js");

async function create(movieData) {
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
    owner : movieData.owner,
  };

  try{
    const result = await Movie.create(movie);
    
    return result;
  }catch(err) {
    throw err
  }


}

async function getAll(skip,pageSize) {
  return Movie
  .find({})
  .skip(skip)
  .limit(pageSize)
}

async function getOne(id) {
  return Movie.findById(id)
}

async function update (id,data) {
  try{
    return Movie.findByIdAndUpdate(id,data,{runValidators : true})
  }catch(err){
    throw err
  }
}

async function del (id) {
  return Movie.deleteOne({_id : id})
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
  getOne,
  update,
  del
};
