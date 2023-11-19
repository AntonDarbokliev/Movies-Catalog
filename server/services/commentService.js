const Comment = require("../models/Comment.js");
// const Movie = require("../models/Movie.js");

async function create(commentData) {
    const comment = {
        owner: commentData.owner,
        movieId: commentData.movieId,
        text: commentData.text,
        title: commentData.title,
    };

    const result = await Comment.create(comment);

    return result;
}


async function getAll() {
    return Comment.find({}).lean().populate('owner')
}

module.exports = {
    create,
    getAll
}
