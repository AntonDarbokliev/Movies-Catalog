import { createContext, useContext, useEffect, useState } from "react";
import { movieFactory } from "../services/movieService.js";
import { useNavigate } from "react-router-dom";


export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const movieService = movieFactory();
  const navigate = useNavigate()

  useEffect(() => {
    movieService
      .get()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  const onMovieCreateSubmit = async (movieData) => {
    const { movieImagesOne, movieImagesTwo, movieImagesThree, year, genres, topCast, ...rest } = movieData;

    const combinedImages = [
      { movieImage: movieImagesOne },
      { movieImage: movieImagesTwo },
      { movieImage: movieImagesThree },
    ];

    const genresArr = genres.split(' ') 

    const topCastArr = topCast.split(', ')

    const result = {...rest, movieImages : combinedImages, year : Number(year), genres : genresArr, topCast : topCastArr }

    try {
      await movieService.post(result)
      const updatedMovies =  await movieService.get()
      setMovies(updatedMovies)
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  const searchMovie = async (formValues) => {
    const {genres, title} = formValues

     const movies = await movieService.get(`?name=${title}&genres=${genres}`)

     return movies

     //?genres=${genres}&name=${title}
  }

  const contextValues = {
    movies,
    onMovieCreateSubmit,
    searchMovie
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
