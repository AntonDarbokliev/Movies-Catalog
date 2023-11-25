import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authService.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { useErrorContext } from "./ErrorContext.jsx";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const authService = authServiceFactory();
  const navigate = useNavigate();
  const {setErrors} = useErrorContext()

  const onRegisterSubmit = async (data) => {

    const { repeatPassword, ...registerData } = data;

    try {

      const result = await authService.register(registerData);

      setAuth(result);

      navigate("/");
    } catch (err) {
      setErrors(err)
    }
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);
      navigate("/");
    } catch (err) {
      setErrors(err)
    }
  };

  const onLogoutSubmit = async () => {
    await authService.logout();
    setAuth({});
    navigate("/");
  };

  const contextValues = {
    onRegisterSubmit,
    onLoginSubmit,
    onLogoutSubmit,
    userId: auth._id,
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
