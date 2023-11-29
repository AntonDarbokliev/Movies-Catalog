import { useEffect, useState } from "react";
import { useErrorContext } from "../../contexts/ErrorContext.jsx";
import warningIcon2 from "../../assets/images/warning2.png";

import "./ErrorNotification.css";

export const ErrorNotification = () => {
  const { errors, setErrors } = useErrorContext();

  useEffect(() => {
    if(Object.keys(errors).length != 0){
      const timeout = setTimeout(() => {
        setErrors({});
      }, 5000);
  
      return () => clearTimeout(timeout);
    }
  }, [errors])

  return (
    <>
      <div id="notificationsContainer">
        {Object.values(errors).map((error) => (
          <div key={error} id="errorNotification">
            <img id="warningError" src={warningIcon2} alt="warnign icon" />
            <p id="errorMessage">{error}</p>
          </div>
        ))}
      </div>
    </>
  );
};
