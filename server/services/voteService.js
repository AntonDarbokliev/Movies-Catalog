const Vote = require("../models/Vote.js");


async function getVotesForMovie(givenMovieId){
    return Vote.find({movieId : givenMovieId})
}

async function vote(voteData){
    console.log(voteData);
    return await Vote.create(voteData)
}

module.exports = {
    getVotesForMovie,
    vote
}