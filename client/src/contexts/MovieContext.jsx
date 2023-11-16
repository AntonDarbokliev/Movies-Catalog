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
      .catch((err) => console.log(err));
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

  const onSearchCatalogSubmit = (formValues) => {
      console.log(formValues); //TODO: implement search after adjusting server side
  }

  const contextValues = {
    movies,
    onMovieCreateSubmit,
    onSearchCatalogSubmit
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
