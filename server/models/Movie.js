const { Schema, Types, model, default: mongoose } = require("mongoose");

const movieSchema = new Schema({
  name: {
    type: String,
    required: [true, "Movie's name is required"],
    minLength: [1, "Movie's name should be at least one character long"],
  },
  director: {
    type: String,
    required: [true, "Director's name is required"],
    minLength: [3, "Director's name should be at least one character long"],
  },
  year: {
    type: Number,
    required: [true, "Movie's year is required"],
    validate: {
      validator: (value) => !!value,

      message: "Year field is required",
    },
    
  },
  topCast: {
    type: [String],
    required: [true, "Movie's top cast is required"],
    validate : {
      validator : (value) => value && value.length > 0 && value.some(item => !!item),
      message : "Movie's top cast is required"
    }
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
    type: [
      {
      movieImage :{
        type : String
      }
    }
  ],
  required: [true, "Movie images are required"],
  validate : {
    validator : (value) => value && value.length > 0 && value.some(item => !!item.movieImage),
    message : "Movie images are required"
  }
  },
  movieTrailer: {
    type: String,
    validate: {
      validator: function (value) {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

        return youtubeRegex.test(value);
      },
      message: (props) => `Invalid YouTube link`,
    },
  },
  description: {
    type: String,
    required: [true, "Movie's description is required"],
    minLength: [10, "Description should be at least 10 characters long"],
  },
  genres: {
    type: [String],
    required: [true, "Movie's genres are required"],
    validate : {
      validator : (value) => value && value.length > 0 && value.some(item => !!item),
      message : "Movie's genres are required"
    }
  },
  upvotes: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  downvotes: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    id: {
      type: Types.ObjectId,
      ref: 'User',
    },
    username: {
      type: String,
      required: [true,'Owner username is required'],
    },
  },
});


const Movie = model('Movie', movieSchema)
module.exports = Movie