import { Link } from "react-router-dom";
import './HomeMovie.css'

export const HomeMovie = ({ imageUrl, movieId }) => {
  return (
      <div className="movieHomeImage">
        <Link to={`movie/${movieId}/details`}>
          <img src={imageUrl} alt="movie poster" />
        </Link>
      </div>
  );
};