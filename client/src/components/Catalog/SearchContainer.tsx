import { ChangeEvent, FormEvent } from "react"
import { FormField } from "../Shared/FormField/FormField"
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton"
import { FilterValue } from "../../types/other";

interface SearchContainerProps{
  onSubmit: (e:FormEvent) => void,
  formValues : {
    title:string,
    genres:string,
  },
  onChangeHandler: (e:ChangeEvent<Element>) => void
}

export const SearchContainer:React.FC<SearchContainerProps> = ({onSubmit,formValues,onChangeHandler}) => {
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
              value={formValues.genres}
              onChange={onChangeHandler}
              name={"genres"}
            />
            <SubmitButton text="Search" />
          </form>
        </div>
      </div>
    )
} 