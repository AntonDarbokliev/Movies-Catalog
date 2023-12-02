import { Link } from "react-router-dom";
import './MovieCard.css'

export const MovieCard = ({ imageUrl, movieId }) => {
  return (
    <div className="movieHomeImage">
        <Link to={`/movie/${movieId}/details`}>
          <img src={imageUrl} alt="movie poster" />
        </Link>
      </div>
  );
};
