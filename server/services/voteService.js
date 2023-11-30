const Vote = require("../models/Vote.js");


async function getVotesForMovie(givenMovieId){
    return Vote.find({movieId : givenMovieId})
}

async function getVotesForUser(userId){
    return Vote.find({ownerId: userId})
}

async function vote(voteData){
    return await Vote.create(voteData)
}

module.exports = {
    getVotesForMovie,
    vote,
    getVotesForUser
}