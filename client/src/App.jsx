import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Routes, Route, redirect, useNavigate } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails/MovieDetails.jsx";
import { UserRatings } from "./components/User/UserRatings/UserRatings.jsx";
import { Register } from "./components/Auth/Register/Register.jsx";
import { Login } from "./components/Auth/Login/Login.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { About } from "./components/About/About.jsx";
import { authServiceFactory } from "./services/authService.js";
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext.js";

function App() {
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory();

  const navigate = useNavigate();

  const onRegisterSubmit = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword !== registerData.password) {
      throw new Error("Passwords not matching");
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/");
    } catch (err) {
      throw new Error(err);
    }
  };

  const onLogoutSubmit = async () => {
    // await authService.logout();
    setAuth({})
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
    <>
      <AuthContext.Provider value={contextValues}>
        <NavBar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="movie/:movieId/details"
              element={<MovieDetails />}
            ></Route>
            <Route path="user/:id/ratings" element={<UserRatings />}></Route>
            <Route path="user/register" element={<Register />}></Route>
            <Route path="user/login" element={<Login />}></Route>
            <Route path="movie/catalog" element={<Catalog />}></Route>
            <Route
              path="*"
              element={<h1 style={{ color: "white" }}>Page not found (404)</h1>}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
