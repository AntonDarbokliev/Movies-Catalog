const Movie = require('../models/Movie.js')

async function create (movieData, userId){
    const movie = {
        name : movieData.name,
        director : movieData.director,
        year : movieData.year,
        topCast : movieData.topCast,
        moviePoster : movieData.moviePoster,
        movieImages : movieData.movieImages,
        description : movieData.description,
        genres : movieData.genres,
        upvotes : movieData.upvotes,
        downvotes : movieData.downvotes,
        // owner : userId
    }

    const result = await Movie.create(movie)

    return result
}

async function getAll() {
    return Movie.find({}).lean().populate('upvotes').populate('downvotes')
}

module.exports = {
    create,
    getAll
}