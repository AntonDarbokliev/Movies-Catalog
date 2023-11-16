import { useMovieContext } from "../../contexts/MovieContext.jsx";
import { useForm } from "../../hooks/useForm.js";
import { FormField } from "../Shared/FormField/FormField.jsx";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";
import './Create.css' 


export const Create = () => {

  const { onMovieCreateSubmit } = useMovieContext()

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      name: "",
      director: "",
      year: 0,
      topCast: "",
      moviePoster: "",
      movieImagesOne: "",
      movieImagesTwo: "",
      movieImagesThree: "",
      description: "",
      genres: "",
    },
    onMovieCreateSubmit
  );
  return (
    <>
      <form id="createForm" method="POST" onSubmit={onSubmit}>
        <div id="createFormFields">
        <FormField
          type={"text"}
          name={"name"}
          placeholder={'Title'}
          onChange={onChangeHandler}
          value={formValues.name}
        />
        <FormField
          type={"text"}
          name={"director"}
          placeholder={'Director'}
          onChange={onChangeHandler}
          value={formValues.director}
        />
        <FormField
          type={"number"}
          name={"year"}
          placeholder={'Year'}
          onChange={onChangeHandler}
          value={formValues.year}
        />
        <FormField
          type={"text"}
          name={"topCast"}
          placeholder={'Top Cast 1'}
          onChange={onChangeHandler}
          value={formValues.topCast}
        />
        <FormField
          type={"text"}
          name={"moviePoster"}
          placeholder={'Movie Poster Image'}
          onChange={onChangeHandler}
          value={formValues.moviePoster}
        />
        <FormField
          type={"text"}
          name={"movieImagesOne"}
          placeholder={'Movie Image Url 1'}
          onChange={onChangeHandler}
          value={formValues.movieImagesOne}
        />
        <FormField
          type={"text"}
          name={"movieImagesTwo"}
          onChange={onChangeHandler}
          placeholder={'Movie Image Url 2'}
          value={formValues.movieImagesTwo}
        />
        <FormField
          type={"text"}
          name={"movieImagesThree"}
          onChange={onChangeHandler}
          placeholder={'Movie Image Url 3'}
          value={formValues.movieImagesThree}
        />
        <FormField
          type={"text"}
          name={"description"}
          placeholder={'Description'}
          onChange={onChangeHandler}
          value={formValues.description}
        />
        <FormField
          type={"text"}
          name={"genres"}
          placeholder={'Genre/s'}
          onChange={onChangeHandler}
          value={formValues.genres}
        />

        <SubmitButton text={'Submit'}/>
        </div>
      </form>
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
