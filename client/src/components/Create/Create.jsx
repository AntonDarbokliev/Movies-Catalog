import { useForm } from "../../hooks/useForm.js";
import { FormField } from "../Shared/FormField/FormField.jsx";
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx";

export const Create = () => {
  const onFormSubmit = (e) => {
    e.preventDefault()
  };

  

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      name: "",
      director: "",
      year: 0,
      topCast: "",
      moviePoster: "",
      movieImages: "",
      description: "",
      genres: "",
    },
    onFormSubmit
  );
  return (
    <>
      <form method="POST" onSubmit={onFormSubmit}>
        <FormField
          type={"text"}
          name={"name"}
          onChange={onChangeHandler}
          value={formValues.name}
        />
        <FormField
          type={"text"}
          name={"director"}
          onChange={onChangeHandler}
          value={formValues.director}
        />
        <FormField
          type={"number"}
          name={"year"}
          onChange={onChangeHandler}
          value={formValues.year}
        />
        <FormField
          type={"text"}
          name={"topCast"}
          onChange={onChangeHandler}
          value={formValues.topCast}
        />
        <FormField
          type={"text"}
          name={"moviePoster"}
          onChange={onChangeHandler}
          value={formValues.moviePoster}
        />
        <FormField
          type={"text"}
          name={"movieImages"}
          onChange={onChangeHandler}
          value={formValues.movieImages}
        />
        <FormField
          type={"text"}
          name={"description"}
          onChange={onChangeHandler}
          value={formValues.description}
        />
        <FormField
          type={"text"}
          name={"genres"}
          onChange={onChangeHandler}
          value={formValues.genres}
        />
        <SubmitButton text={'Submit'}/>
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
