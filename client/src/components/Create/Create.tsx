import { useMovieContext } from "../../contexts/MovieContext";
import { useForm } from "../../hooks/useForm";
import { EditCreateForm } from "../Shared/EditCreateForm/EditCreateForm";
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
