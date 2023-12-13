import { FormField } from "../Shared/FormField/FormField.jsx"
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx"

export const SearchContainer = ({onSubmit,formValues,onChangeHandler}) => {
    return (
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
    )
} 