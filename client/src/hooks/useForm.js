import { useState } from "react";

export const useForm = ( initialValue ) => {
    const [formValues, setFormValues] = useState(initialValue)

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state,[e.target.name]:e.target.value}))
    }

    return {
        formValues,
        onChangeHandler
    }
}