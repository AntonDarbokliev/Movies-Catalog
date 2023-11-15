import { createContext, useContext, useEffect, useState } from "react";
import { requestFactory } from "../services/requester.js";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "http://localhost:3000/movie";
  const request = requestFactory();

  //   const getAllMovies = async () => {
  //     try {
  //       const data = await request.get(baseUrl);
  //       setMovies(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    request
      .get(baseUrl)
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
