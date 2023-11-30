import { useMovieContext } from "../../contexts/MovieContext.jsx";
import { useForm } from "../../hooks/useForm.js";
import { EditCreateForm } from "../Shared/EditCreateForm/EditCreateForm.jsx";
import "./Create.css";

export const Create = () => {
  const { onMovieCreateSubmit } = useMovieContext();

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      name: "",
      director: "",
      year: "",
      topCast: "",
      moviePoster: "",
      movieImagesOne: "",
      movieImagesTwo: "",
      movieImagesThree: "",
      movieTrailer: "",
      description: "",
      genres: "",
    },
    onMovieCreateSubmit
  );

  return (
    <>
      <EditCreateForm
        onSubmit={onSubmit}
        onChangeHandler={onChangeHandler}
        formValues={formValues}
        text={"Create"}
        modalText={"Are you sure you want to create a movie?"}
        modalTitle={'Create a Movie'}
      />
    </>
  );
};

// Each movie has:
// Name
// Genre
// Poster image
// Images from film
// Year
// Upvotes
// Downvotes
// Descriptiion
// Top Cast (most likely an array) - may not do this
// Director
