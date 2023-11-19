const { Schema, Types, model, default: mongoose } = require("mongoose");

const commentSchema = new Schema({
  movieId : {
    type : Types.ObjectId,
    ref : 'Movie' 
  },
  owner : {
    type : Types.ObjectId,
    ref : 'User'
  },
  text : {
    type : String,
    required : [true,'Comment is empty']
  },
  title : {
    type : String,
    required : [true,'Title is required']
  }
});


const Comment = model('Comment', commentSchema)
module.exports = Comment