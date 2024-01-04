import { Link } from "react-router-dom";
import './MovieCard.css'
import { Fade } from "react-awesome-reveal";

interface MovieCardProps {
  imageUrl : string,
  movieId:string
}

export const MovieCard:React.FC<MovieCardProps> = ({ imageUrl, movieId }) => {
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
