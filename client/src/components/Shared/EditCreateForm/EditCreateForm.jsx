import { FormField } from "../FormField/FormField.jsx"
import { SubmitButton } from "../SubmitButton/SubmitButton.jsx"

export const EditCreateForm = ({
    onSubmit,
    onChangeHandler,
    formValues
}) => {
    return (
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
          placeholder={'Top Cast'}
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
          name={"movieTrailer"}
          placeholder={'YouTube trailer link'}
          onChange={onChangeHandler}
          value={formValues.movieTrailer}
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
    )
}