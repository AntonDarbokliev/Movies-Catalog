import "./MovieDetails.css";
import likeIcon from "../../assets/images/like.png";
import disklikeIcon from "../../assets/images/dislike.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieFactory } from "../../services/movieService.js";
export const MovieDetails = () => {
  const { movieId } = useParams();
  const [ details, setDetails ] = useState({});

  const movieService = movieFactory()

  useEffect(() => {
    movieService.get(`/${movieId}`)
    .then(movie => {
      setDetails(movie)
    } )
    .catch(err => console.error(err))

  }, [movieId]);

  const extractYouTubeVideoId = (link) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = link.match(regex);

    // If there is a match, return the video ID, otherwise return null or handle as needed
    return match ? match[1] : null;
  };


  return (
    <>
    
      <h1 id="title">{details.name}</h1>
      <div className="container">
        <div className="imageDiv">
          <img
            className="movieImage"
            src={details.moviePoster}
            id="poster"
          />
        </div>

        <div className="videoPlayer">
          <iframe
            width="580"
            height="400"
            src={"https://www.youtube.com/embed/" +  (details.movieTrailer ? extractYouTubeVideoId(details.movieTrailer) : '')}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="movieInfo">
          <ul>
            <li id="director">
              <span>Director:</span> {details.director}
            </li>
            <li id="movieYear">
              <span>Year:</span> {details.year}
            </li>
            <li id="topCast">
              <span> Top Cast:</span>  {details.topCast?.join(', ')}
            </li>
            <li id="publisher">
              <span> Publisher:</span>  {details.owner?.username}
            </li>
          </ul>
        </div>
      </div>

      <div className="movieImages">
        <ul>
          {details.movieImages?.map(x => <img key={x._id} className="movieImage"
              src={x.movieImage}
              alt={x._id}
            />)}
        </ul>
      </div>

      <div className="genreRating">
        <p className="genres"> {details.genres?.join(', ')}</p>
        <div className="ratingDiv">
          <button id="upvote">
            <img id="likeButton" src={likeIcon} alt="" />
          </button>
          <button id="downvote">
            <img id="dislikeButton" src={disklikeIcon} alt=""></img>
          </button>
          <p id="rating">User rating: 15.9k </p>
        </div>
      </div>

      <p className="description">
        {details.description}
      </p>
    </>
  );
};
