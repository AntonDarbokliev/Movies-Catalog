import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { ReactNode } from "react";
 
interface RouteGuardProps {
  children? : ReactNode
}

export const RouteGuard:React.FC<RouteGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to={'/user/login'}/>
  } 

  return children ? children : <Outlet />;
};
