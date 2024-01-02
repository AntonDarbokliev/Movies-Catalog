import { useState } from "react";

export const useFormValidation = <T>(initialValue:T) => {
  const [validationValues, setDidEditValues] = useState(initialValue);
  
  const onFocusBlurHandler = (boolean:boolean,name:string) => {
    setDidEditValues((state:T) => ({ ...state, [name]: boolean }));
  };

  const onBlurHandler = onFocusBlurHandler.bind(null,true)
  const onFocusHandler = onFocusBlurHandler.bind(null,false)

  return {
    onBlurHandler,
    onFocusHandler,
    validationValues
  }
};
