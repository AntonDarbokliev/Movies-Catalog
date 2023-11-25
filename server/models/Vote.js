const { Schema, model, default: mongoose, Types } = require("mongoose");

const voteSchema = new Schema({
    ownerId : {
        type : Types.ObjectId,
        required : [true,'No owner id is provided'],
        ref : 'User'
    },
    movieId : {
        type : Types.ObjectId,
        required : [true,'No movie id is provided'],
        ref : 'Movie'
    },
    vote : {
        type : String,
        required : [true,'No vote is provided']
    }

})

const Vote = model('Vote',voteSchema)

module.exports = Vote