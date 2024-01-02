import likeIcon from "../../../assets/images/like.png";
import dislikeIcon from "../../../assets/images/dislike.png";
import "./UserRatings.css";
import { MovieCard } from "../../Shared/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { movieFactory } from "../../../services/movieService";
import { useParams } from "react-router-dom";
import { RatingCard } from "../../RatingCard/RatingCard";
import { authServiceFactory } from "../../../services/authService";
import { Spinner } from "../../Shared/Spinner/Spinner";


export const UserRatings = () => {

  const movieService =  movieFactory()
  const authService = authServiceFactory()
  const [votes,setVotes]  = useState([])
  const [user,setUser] = useState({})
  const {id} = useParams()
  const [isLoading,setIsLoading] = useState(true)


  useEffect(() => {
    authService.getUser(id)
    .then(data => {
      setUser(data)
      setIsLoading(false)
    } )
    .catch(err => console.log(err))
  },[id])

  useEffect(() => {
    movieService.get(`/vote/user/${id}`)
    .then(data => setVotes(data.reverse()))
    .catch(err => console.log(err))
  
  },[id])
  
  

  return (
    <div id="userRatingsDiv">
      {isLoading && <Spinner/>}
      <h1 id="header">{user.username}'s Ratings</h1>
      <div id="userRatings">
        {votes.length == 0 && 
          <h1 id="noRatings">{user.username} hasn't rated any movies yet</h1>
        }
        {votes.map(x =>
            <RatingCard
            key={x._id} 
            icon={x.vote == 'upvote' ? likeIcon : dislikeIcon} 
            title={x.movieId.name} 
            year={x.movieId.year} 
            genres={x.movieId.genres}
            >
           <MovieCard movieId={x.movieId._id} imageUrl={x.movieId.moviePoster}/> 
            </RatingCard>
            )}
      </div>
    </div>
  );
};
