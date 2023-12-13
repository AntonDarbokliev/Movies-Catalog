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
}

async function getLatest(){
  return Movie.find().sort({ _id: -1 }).limit(3)
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

async function movieSearch(movieName, movieGenres,skip,pageSize) {

  if (!!movieName && movieGenres[0]!=='') {
    const movies = await Movie.find({
      name: {$regex : new RegExp(movieName,'i')},
      genres: { $in: new RegExp(movieGenres,'i') },
    })
    .skip(skip)
    .limit(pageSize);
    if (movies.length === 0) {
      throw new Error("No movies were found");
    }
    return movies;
  } else if (!!movieName) {
    const movies = await Movie.find({ name: {$regex : new RegExp(movieName,'i')} })
    .skip(skip)
    .limit(pageSize);
    if (movies.length === 0) {
      throw new Error("No movies were found");
    }
    return movies;
  } else if (movieGenres[0]!=='' && movieGenres[0]!== undefined) {
    const movies = await Movie.find({ genres: { $in: new RegExp(movieGenres,'i') } })
    .skip(skip)
    .limit(pageSize);
    if (movies.length === 0) {
      throw new Error("No movies were found");
    }

    return movies;
  } else {
    const movies = await Movie.find({})
    .skip(skip)
    .limit(pageSize)
    return movies
  }

}

module.exports = {
  create,
  getAll,
  movieSearch,
  getOne,
  update,
  del,
  getLatest
};
