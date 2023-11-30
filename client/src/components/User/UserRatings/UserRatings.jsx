import likeIcon from "../../../assets/images/like.png";
import dislikeIcon from "../../../assets/images/dislike.png";
import "./UserRatings.css";
import { MovieCard } from "../../Shared/MovieCard/MovieCard.jsx";
import { useAuthContext } from "../../../contexts/AuthContext.jsx";
import { useEffect, useState } from "react";
import { movieFactory } from "../../../services/movieService.js";
import { useParams } from "react-router-dom";


export const UserRatings = () => {

  const movieService =  movieFactory()
  const [votes,setVotes]  = useState([])
  const {id} = useParams()

  useEffect(() => {
    movieService.get(`/vote/user/${id}`)
    .then(data => setVotes(data.reverse()))
  
  },[])
  
  const { username } = useAuthContext()
  

  return (
    <div id="userRatingsDiv">
      <h1 id="header">{username}'s Ratings</h1>
      <div id="userRatings">
        {votes.map(x => <MovieCard movieId={x.movieId._id} imageUrl={x.movieId.moviePoster}/>  )}
      </div>
    </div>
  );
};
