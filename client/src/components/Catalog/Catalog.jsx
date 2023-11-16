import { useEffect, useState } from "react";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";
import "./Catalog.css";
import { MovieCard } from "../Shared/MovieCard/MovieCard.jsx";
import { useForm } from "../../hooks/useForm.js";
import { useMovieContext } from "../../contexts/MovieContext.jsx";
import { FormField } from "../Shared/FormField/FormField.jsx";

export const Catalog = () => {
  const { searchMovie, movies } = useMovieContext();
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult(movies);
  }, []);

  const onSearchSubmit = async () => {
    try {
      const data = await searchMovie(formValues);
      setSearchResult(data);
    } catch (err) {
      console.error(err);
    }
  };
  
  const { formValues, onSubmit, onChangeHandler } = useForm(
    {
      title: "",
      genres: "",
    },
    onSearchSubmit
  );

  return (
    <>
      <div id="searchContainer">
        <h1>Search a Movie</h1>
        <div id="searchField">
          <form onSubmit={onSubmit}>
            <FormField
              type={"text"}
              placeholder={"Movie Title"}
              value={formValues.title}
              onChange={onChangeHandler}
              name={"title"}
            />
            <FormField
              type={"text"}
              placeholder={"Movie Genre/s"}
              value={formValues.genre}
              onChange={onChangeHandler}
              name={"genres"}
            />
            <SubmitButton text="Search" />
          </form>
        </div>
      </div>

      <div id="catalogContainer">
        {searchResult.map((x) => (
          <MovieCard movieId={x._id} key={x._id} imageUrl={x.moviePoster} />
        ))}
      </div>
    </>
  );
};
