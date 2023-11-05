import { useState } from "react";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";
import './Catalog.css'
import { MovieCard } from "../Shared/MovieCard/MovieCard.jsx";

export const Catalog = () => {
  const onSearchHandler = () => {};

  const [formValue, setFormValue] = useState({
    title: "",
    genre: "",
  });

  const handleInputChange = (e) => {
    const { title, genre } = e.target;
    setFormValue(...formValue, title, genre);
  };

  return (
    <>
    <div id="searchContainer">
          <h1 id="a">Search a Movie</h1> 
      <div id="searchField">
        <form onSubmit={onSearchHandler}>
          <input
            className="searchInput"
            type="text"
            placeholder="Movie Title"
            value={formValue.title}
            onChange={handleInputChange}
          />
          <input
            className="searchInput"
            type="text"
            placeholder="Movie Genre"
            value={formValue.genre}
            onChange={handleInputChange}
          />
          <SubmitButton text='Search'/>
        </form>
      </div>
    </div>
    <div id="catalogContainer">
        <MovieCard movieId={12} imageUrl={'https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'}/>        
        <MovieCard movieId={12} imageUrl={'https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'}/>        
        <MovieCard movieId={12} imageUrl={'https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'}/>        
        <MovieCard movieId={12} imageUrl={'https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg'}/>        
    </div>
    </>
  );
};
