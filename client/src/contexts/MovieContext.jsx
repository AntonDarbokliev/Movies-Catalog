import { createContext, useContext, useEffect, useState } from "react";
import { movieFactory } from "../services/movieService.js";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const movieService = movieFactory()

  useEffect(() => {
    movieService
      .get()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [movies]);

  const contextValues = {
    movies,
  };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
     return useContext(MovieContext)
} 
