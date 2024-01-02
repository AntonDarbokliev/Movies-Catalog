import { ReactNode, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authService.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { useErrorContext } from "./ErrorContext.jsx";

import { LoginData,RegisterData } from '../types/AuthData.js'

interface AuthProviderProps {
  children : ReactNode
}

interface AuthContextType {
  onRegisterSubmit: (data:RegisterData) => void
    onLoginSubmit: (data:LoginData) => void
    onLogoutSubmit: () => void
    userId: string
    token: string
    isAuthenticated: boolean
    username: string
}

const initialContextValue:AuthContextType = {
  onRegisterSubmit(_:RegisterData){},
  onLoginSubmit(_:LoginData){},
  onLogoutSubmit() {},
  userId:'',
  token:'',
  username:'',
  isAuthenticated:false
}

export const AuthContext = createContext<AuthContextType>(initialContextValue);

export const AuthProvider:React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth");
  const authService = authServiceFactory();
  const navigate = useNavigate();
  const {setErrors} = useErrorContext()

  const onRegisterSubmit = async (data:RegisterData) => {
    try {

      const result = await authService.register(data);

      setAuth(result);

      navigate("/");
    } catch (err:any) {
      setErrors(err)
    }
  };

  const onLoginSubmit = async (data: LoginData) => {
    try {
      const result = await authService.login(data);

      setAuth(result);
      navigate("/");
    } catch (err:any) {
      setErrors(err)
    }
  };

  const onLogoutSubmit = async () => {
    await authService.logout();
    setAuth({
      email:'',
      password: '',
      token: '',
      username: ''
    });
    navigate("/");
  };

  const contextValues : AuthContextType = {
    onRegisterSubmit,
    onLoginSubmit,
    onLogoutSubmit,
    userId: auth._id!,
    token: auth.token,
    isAuthenticated: !!auth.token,
    username: auth.username,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
