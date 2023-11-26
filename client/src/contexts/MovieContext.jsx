import { createContext, useContext, useEffect, useState } from "react";
import { movieFactory } from "../services/movieService.js";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "./ErrorContext.jsx";
import { useAuthContext } from "./AuthContext.jsx";
import { voteFactory } from "../services/voteService.js";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const movieService = movieFactory();
  const navigate = useNavigate();
  const { setErrors } = useErrorContext();
  const { userId } = useAuthContext();
  const voteService = voteFactory();

  useEffect(() => {
    movieService
      .get()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  const onDelete = async (id) => {
    const movie = movies.find((x) => x._id === id);
    const result = confirm(`Are you sure you want to delete "${movie.name}"`);
    if (result) {
      await movieService.delete(id, userId);
      setMovies((state) => state.filter((x) => x._id !== id));
      navigate("/movie/catalog");
    }
  };

  const vote = async (vote, movieId, ownerId) => {
    try {
      const currentVote = await voteService.post(movieId,ownerId,vote)
      return currentVote
    } catch (err) {
      setErrors(err)
    }
  };

  // const vote = async (voteType, movieId, userId) => {
  //   try {
  //     const movie = await movieService.get(`/${movieId}`);

  //     switch (voteType) {
  //       case "downvote":
  //         const downvotesWithCurrentUser = [...movie.downvotes, userId];
  //         await movieService.put(movie._id, {
  //           downvotes: downvotesWithCurrentUser,
  //         });
  //         break;
  //       case "upvote":
  //         const upvotesWithCurrentUser = [...movie.upvotes, userId];
  //         await movieService.put(movie._id, {
  //           upvotes: upvotesWithCurrentUser,
  //         });
  //         break;
  //     }

  //     const updatedMovie = await movieService.get(`/${movieId}`);

  //     setMovies(state => state.map(x => (x._id === movieId) ? updatedMovie : x));

  //     return updatedMovie
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const onMovieCreateSubmit = async (movieData) => {
    const {
      movieImagesOne,
      movieImagesTwo,
      movieImagesThree,
      year,
      genres,
      topCast,
      ...rest
    } = movieData;

    const combinedImages = [
      { movieImage: movieImagesOne },
      { movieImage: movieImagesTwo },
      { movieImage: movieImagesThree },
    ];

    const genresArr = genres.split(" ");

    const topCastArr = topCast.split(", ");

    const { username, _id } = JSON.parse(localStorage.getItem("auth"));

    const owner = {
      id: _id,
      username,
    };

    const result = {
      ...rest,
      movieImages: combinedImages,
      year: Number(year),
      genres: genresArr,
      topCast: topCastArr,
      owner,
    };

    try {
      const movie = await movieService.post(result);
      setMovies((state) => [...state, movie]);
      navigate("/");
    } catch (err) {
      setErrors(err);
    }
  };

  const searchMovie = async (formValues) => {
    const { genres, title } = formValues;

    const movies = await movieService.get(`?name=${title}&genres=${genres}`);

    return movies;
  };

  const extractYouTubeVideoId = (link) => {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = link.match(regex);

    // If there is a match, return the video ID, otherwise return null or handle as needed
    return match ? match[1] : null;
  };

  const contextValues = {
    movies,
    onMovieCreateSubmit,
    searchMovie,
    onDelete,
    vote,
    extractYouTubeVideoId,
  };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
