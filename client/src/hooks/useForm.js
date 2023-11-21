import { useEffect, useState } from "react";

export const useForm = ( initialValue, onSubmitHandler ) => {
    const [formValues, setFormValues] = useState(initialValue)

    // useEffect(() => {
    //     if(JSON.stringify(formValues) !== JSON.stringify(initialValue)){
    //         setFormValues(initialValue)
    //     }
    // },[initialValue])

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state,[e.target.name]:e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitHandler(formValues)
    }

    const changeValues = (newValues) => {
        setFormValues(newValues)
    }

    return {
        formValues,
        onChangeHandler,
        changeValues,
        onSubmit
    }
}