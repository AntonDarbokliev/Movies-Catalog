import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [errors,setErrors] = useState({})

    const contextValues = {
        errors,
        setErrors
      };
    
      return (
        <ErrorContext.Provider value={contextValues}>
          {children}
        </ErrorContext.Provider>
      );
}


export const useErrorContext = () => {
    return useContext(ErrorContext);
  };
  