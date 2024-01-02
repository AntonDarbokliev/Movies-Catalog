import { createContext, useContext, useState } from "react";

interface CreateContextValue {
  errors : object,
  setErrors: React.Dispatch<React.SetStateAction<{}>>
}

export const ErrorContext = createContext<CreateContextValue>({
  errors: {},
  setErrors: () => {}
});

interface ErrorProviderParams {
  children: import("react").ReactNode
}

export const ErrorProvider:React.FC<ErrorProviderParams> = ({ children }) => {
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
  