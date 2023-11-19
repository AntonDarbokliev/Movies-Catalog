const Comment = require("../models/Comment.js");
// const Movie = require("../models/Movie.js");

async function create(commentData) {
    const comment = {
        ownerId: commentData.ownerId,
        movieId: commentData.movieId,
        text: commentData.text,
        title: commentData.title,
    };

    const result = await Comment.create(comment);

    return result;
}


async function getAll() {
    return Comment.find({}).lean().populate('ownerId')
}

module.exports = {
    create,
    getAll
}
