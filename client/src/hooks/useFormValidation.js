import { useState } from "react";

export const useFormValidation = (initialValue) => {
  const [validationValues, setDidEditValues] = useState(initialValue);
  
  const onFocusBlurHandler = (boolean,name) => {
    setDidEditValues((state) => ({ ...state, [name]: boolean }));
  };

  const onBlurHandler = onFocusBlurHandler.bind(null,true)
  const onFocusHandler = onFocusBlurHandler.bind(null,false)

  return {
    onBlurHandler,
    onFocusHandler,
    validationValues
  }
};
