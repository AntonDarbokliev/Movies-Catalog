import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext.jsx";

export const RouteGuard = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to={'/user/login'}/>
  } 

  return children ? children : <Outlet />;
};
