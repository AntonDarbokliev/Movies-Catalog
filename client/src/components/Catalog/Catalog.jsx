import { useState } from "react";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";
import "./Catalog.css";
import { MovieCard } from "../Shared/MovieCard/MovieCard.jsx";
import { useForm } from "../../hooks/useForm.js";
import { useMovieContext } from "../../contexts/MovieContext.jsx";
import { FormField } from "../Shared/FormField/FormField.jsx";

export const Catalog = () => {
  const { onSearchCatalogSubmit }  = useMovieContext()
  
  const {formValues,onSubmit,onChangeHandler} = useForm({
    title: "",
    genres: "",
  },onSearchCatalogSubmit);

  

  return (
    <>
      <div id="searchContainer">
        <h1 >Search a Movie</h1>
        <div id="searchField">
          <form onSubmit={onSubmit}>
            <FormField
            type={'text'}
            placeholder={'Movie Title'}
            value={formValues.title}
            onChange={onChangeHandler}
            name={'title'}
            />
            <FormField
            type={'text'}
            placeholder={'Movie Genre/s'}
            value={formValues.genre}
            onChange={onChangeHandler}
            name={'genres'}
            />
            <SubmitButton text="Search" />
          </form>
        </div>
      </div>

      <div id="catalogContainer">
        <MovieCard
          movieId={12}
          imageUrl={
            "https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          }
        />
        <MovieCard
          movieId={12}
          imageUrl={
            "https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          }
        />
        <MovieCard
          movieId={12}
          imageUrl={
            "https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          }
        />
        <MovieCard
          movieId={12}
          imageUrl={
            "https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
          }
        />
      </div>
    </>
  );
};
