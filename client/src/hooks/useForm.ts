import { FormEvent, useState } from "react";

export const useForm = <T>(initialValue: T, onSubmitHandler:Function) => {
  const [formValues, setFormValues] = useState(initialValue);

  const onChangeHandler = (e:FormEvent) => {
    const target = e.target as HTMLInputElement
    setFormValues((state) => ({ ...state, [target.name]: target.value }));
  };

  const onSubmit = (e:FormEvent) => {
    e.preventDefault();
    onSubmitHandler(formValues);
  };

  const changeValues = (newValues:T) => {
    setFormValues(newValues);
  };

  return {
    formValues,
    onChangeHandler,
    changeValues,
    onSubmit,
  };
};
