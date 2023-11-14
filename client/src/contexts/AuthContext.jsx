import { createContext, useState, } from "react";
import { useNavigate } from "react-router-dom";
import {authServiceFactory } from '../services/authService.js'
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
  const [auth, setAuth] = useLocalStorage('auth',{});
  const authService = authServiceFactory();

  const navigate = useNavigate();

  const onRegisterSubmit = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword !== registerData.password) {
      throw new Error("Passwords not matching");
    }

    try {
      const result = await authService.register(registerData);
      // const token = result.token

      setAuth(result);

      navigate("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      // const token = result.token

      setAuth(result);
      navigate("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  const onLogoutSubmit = async () => {
    await authService.logout();
    setAuth({});
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
)

};