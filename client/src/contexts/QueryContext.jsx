import { createContext, useContext, useState } from "react";

export const QueryContext = createContext();

export const QueryProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageSize, setCurrentPageSize] = useState(8); 
    const [movieName, setMovieName] = useState(''); 
    const [movieGenres, setMovieGenres] = useState(''); 


    const contextValues = {
        currentPage,
        setCurrentPage,
        currentPageSize,
        setCurrentPageSize,
        movieName,
        movieGenres,
        setMovieGenres,
        setMovieName
      };
    
      return (
        <QueryContext.Provider value={contextValues}>
          {children}
        </QueryContext.Provider>
      );
}

export const useQueryContext = () => {
    const context = useContext(QueryContext)
    return context
}
