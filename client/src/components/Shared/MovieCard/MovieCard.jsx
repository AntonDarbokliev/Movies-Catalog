import { Link } from "react-router-dom";
import './MovieCard.css'
import { Fade } from "react-awesome-reveal";

export const MovieCard = ({ imageUrl, movieId }) => {
  return (
    <Fade>
    <div className="movieHomeImage">
        <Link to={`/movie/${movieId}/details`}>
          <img src={imageUrl} alt="movie poster" />
        </Link>
      </div>
      </Fade> 
  );
};
