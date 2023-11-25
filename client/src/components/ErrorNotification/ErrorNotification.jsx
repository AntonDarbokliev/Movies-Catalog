import { useEffect } from "react";
import { useErrorContext } from "../../contexts/ErrorContext.jsx";

import "./ErrorNotification.css";

export const ErrorNotification = () => {
  const { errors, setErrors } = useErrorContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors({});
    }, 5000);

    return () => clearTimeout(timeout);
  }, [errors])

  return (
    <>
      <div id="notificationsContainer">
        {Object.values(errors).map((error) => (
          <div key={error} id="errorNotification">
            <p id="errorMessage">{error}</p>
          </div>
        ))}
      </div>
    </>
  );
};
