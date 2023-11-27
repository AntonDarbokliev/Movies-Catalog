import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails/MovieDetails.jsx";
import { UserRatings } from "./components/User/UserRatings/UserRatings.jsx";
import { Register } from "./components/Auth/Register/Register.jsx";
import { Login } from "./components/Auth/Login/Login.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { About } from "./components/About/About.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Create } from "./components/Create/Create.jsx";
import { MovieProvider } from "./contexts/MovieContext.jsx";
import { Edit } from "./components/Edit/Edit.jsx";
import { ErrorProvider } from "./contexts/ErrorContext.jsx";
import { ErrorNotification } from "./components/ErrorNotification/ErrorNotification.jsx";
import { RouteGuard } from "./components/Shared/RouteGuard/RouteGuard.jsx";
import { QueryProvider } from "./contexts/QueryContext.jsx";

function App() {
  return (
    <>
      <ErrorProvider>
        <AuthProvider>
          <QueryProvider>
          <MovieProvider>
            <NavBar />
            <ErrorNotification />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                  path="movie/:movieId/details"
                  element={<MovieDetails />}
                ></Route>

                <Route element={<RouteGuard />}>
                    <Route path="/movie/create" element={<Create />}></Route>
                    <Route
                      path="user/:id/ratings"
                      element={<UserRatings />}
                    ></Route>
                    <Route path="/movie/:id/edit" element={<Edit />}></Route>
                </Route>

                <Route path="user/register" element={<Register />}></Route>
                <Route path="user/login" element={<Login />}></Route>
                <Route path="movie/catalog" element={<Catalog />}></Route>
                <Route
                  path="*"
                  element={
                    <h1 style={{ color: "white" }}>Page not found (404)</h1>
                  }
                ></Route>
              </Routes>
            </div>
          </MovieProvider>
          </QueryProvider>
        </AuthProvider>
      </ErrorProvider>
      <Footer />
    </>
  );
}

export default App;
