const { Schema, Types, model, default: mongoose } = require("mongoose");

const movieSchema = new Schema({
  name: {
    type: String,
    requried: [true, "Movie's name is required"],
    minLength: [1, "Movie's name should be at least one character long"],
  },
  director: {
    type: String,
    requried: [true, "Director's name is required"],
    minLength: [3, "Director's name should be at least one character long"],
  },
  year: {
    type: Number,
    requried: [true, "Movie's year is required"],
    validate: {
      validator: (value) => {
        return !isNaN(value);
      },
      message: "Year field must be a number.",
    },
  },
  topCast: {
    type: [String],
    requried: [true, "Movie's top cast is required"],
  },
  moviePoster: {
    type: String,
    required: [true, "Movie's poster image is required"],
    validate: {
      validator: function (value) {
        const urlPattern = /^(http|https):\/\/.*(jpeg|jpg|png|gif|bmp)$/i;
        return urlPattern.test(value);
      },
      message:
        "Invalid image URL. Must be HTTP or HTTPS and end with .jpeg, .jpg, .png, .gif, or .bmp.",
    },
  },
  movieImages: {
    type: [String],
    required: [true, "Movie images are required"],
    //TODO: Add validtaion making sure there atleast a certain amount of images
  },
  description: {
    type: String,
    required: [true, "Movie's description is required"],
    minLength: [10, "Description should be at least 10 characters long"],
  },
  genres: {
    type: [String],
    required: [true, "Movie's genres are required"],
    //TODO: Add validtaion making sure there atleast a certain amount of genres
  },
  userRatings: [ 
    {
        type: Types.ObjectId,
        ref: 'User',
  }
],
});
