import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { UserRatings } from "./components/User/UserRatings/UserRatings";
import { Register } from "./components/Auth/Register/Register";
import { Login } from "./components/Auth/Login/Login";
import { Catalog } from "./components/Catalog/Catalog";
import { About } from "./components/About/About";
import { AuthProvider } from "./contexts/AuthContext";
import { Create } from "./components/Create/Create";
import { MovieProvider } from "./contexts/MovieContext";
import { Edit } from "./components/Edit/Edit";
import { ErrorProvider } from "./contexts/ErrorContext";
import { ErrorNotification } from "./components/ErrorNotification/ErrorNotification";
import { RouteGuard } from "./components/Shared/RouteGuard/RouteGuard";
import { News } from "./components/News/News";

function App() {
  return (
    <>
      <ErrorProvider>
        <AuthProvider>
          <MovieProvider>
            <NavBar />
            <ErrorNotification />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/news" element={<News />}></Route>
                <Route path="movie/:movieId/details" element={<MovieDetails />}></Route>

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
                <Route path="/movie/catalog" element={<Catalog />}></Route>
                <Route
                  path="*"
                  element={
                    <h1 style={{ color: "white" }}>Page not found (404)</h1>
                  }
                ></Route>
              </Routes>
            </div>
          </MovieProvider>
        </AuthProvider>
      </ErrorProvider>
      <Footer />
    </>
  );
}

export default App;
