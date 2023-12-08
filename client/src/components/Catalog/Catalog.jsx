import { useCallback, useEffect, useRef, useState } from "react";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";
import "./Catalog.css";
import { MovieCard } from "../Shared/MovieCard/MovieCard.jsx";
import { useForm } from "../../hooks/useForm.js";
import { useMovieContext } from "../../contexts/MovieContext.jsx";
import { FormField } from "../Shared/FormField/FormField.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import { movieFactory } from "../../services/movieService.js";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Spinner } from "../Shared/Spinner/Spinner.jsx";


export const Catalog = () => {
  const { searchMovie, movies} = useMovieContext();
  const [searchResult, setSearchResult] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const movieService = movieFactory()
  const allMovies = useRef([])
  const navigate = useNavigate()
  const [searchParams,setSearchParams] = useSearchParams()
  const [isLoading,setIsLoading] = useState()


  useEffect(() => {
    if(!searchParams.get('page')){
      navigate(
        `?name=&genres=&page=1&pageSize=8`
      );
    }
    setIsLoading(true)
    if(filterValue !== ''){
      movieService.get('/all')
      .then(data => {
       allMovies.current = data
       setIsLoading(false)
      })
      .then(() => {
        const filteredMovies = sortMovies(allMovies.current,filterValue)
        setSearchResult(filteredMovies)
      })
      .catch(err => console.log(err))
    }else if(movies.length > 0){
      setSearchResult(movies);
      setIsLoading(false)

    }

  }, [movies,filterValue]);
  



  const onSearchSubmit = async () => {
    try {
      const data = await searchMovie(formValues);
    setSearchResult(data);
      setFilterValue('')
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

  const sortMovies = useCallback( (movies, sortBy) => {
    switch (sortBy) {
      case "yearNewest":
        return movies.sort((a,b) => b.year - a.year)
      case "yearOldest":
        return  movies.sort((a,b) => a.year - b.year)
      case "a-z":
        return  movies.sort((a,b) => (a.name).localeCompare(b.name))
      case "z-a":
        return  movies.sort((a,b) => (b.name).localeCompare(a.name))
      default:
        return movies
    }
  },[])

  const onSortChange = (e) => {
    setFilterValue(e.target.value)
  };

  return (
    <>
      {/* {isLoading && <Spinner/>} */}
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

      <div id="filterDropdown">
        <label htmlFor="sort">Sort By: </label>
        <select name="sort" id="sort" onChange={onSortChange} value={filterValue}>
          <option value="" disabled hidden>Select Sorting Option</option>
          <option value="yearNewest">Year - Newest to Oldest</option>
          <option value="yearOldest">Year - Oldest to Newest</option>
          <option value="a-z">Alphabetically - A-Z</option>
          <option value="z-a">Alphabetically - Z-A</option>
        </select>
      </div>

      <div id="catalogContainer">
        {searchResult.map((x) => (
          <MovieCard movieId={x._id} key={x._id} imageUrl={x.moviePoster} />
          ))}
      </div>
      <Pagination/>
      
    </>
  );
};