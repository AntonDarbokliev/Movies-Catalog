import "./MovieDetails.css";
import likeIcon from "../../assets/images/like.png";
import disklikeIcon from "../../assets/images/dislike.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieFactory } from "../../services/movieService.js";
import { commentFactory } from "../../services/commentService.js";
import { CommentCard } from "../Comment/CommentCard/CommentCard.jsx";
import { CommentForm } from "../Comment/CommentForm/CommentForm.jsx";
export const MovieDetails = () => {
  const { movieId } = useParams();
  const [ details, setDetails ] = useState({});
  const [comments, setComments] = useState([])
  const userId = JSON.parse(localStorage.getItem('auth'))._id

  const movieService = movieFactory()
  const commentService = commentFactory()

  useEffect(() => {
    movieService.get(`/${movieId}`)
    .then(movie => setDetails(movie))
    .catch(err => console.error(err))

  }, [movieId]);

  useEffect(()=> {
      commentService.get()
        .then(data => {
          const movieComments = data.filter(x => x.movieId === movieId)
          setComments(movieComments)
        })
        .catch(err => console.error(err))
  },[details])


  const extractYouTubeVideoId = (link) => {
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = link.match(regex);

    // If there is a match, return the video ID, otherwise return null or handle as needed
    return match ? match[1] : null;
  };

  const vote = async (voteType) =>  {
    try {
      const movie = await movieService.get(`/${movieId}`)  
  
        switch (voteType) {
          case 'downvote':
            const downvotesWithCurrentUser = [...movie.downvotes,userId]
            await movieService.put(movie._id,{downvotes : downvotesWithCurrentUser})
          break;
          case 'upvote':
            const upvotesWithCurrentUser = [...movie.upvotes,userId]
            await movieService.put(movie._id,{upvotes : upvotesWithCurrentUser})
          break;
        }

        const updatedMovie = await movieService.get(`/${movieId}`)
        setDetails(updatedMovie)  

      
    } catch (err) {
      console.error(err)
    }
  }


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
        <script src="https://www.youtube.com/iframe_api" crossOrigin="anonymous"></script>

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
          <ul id="movieInfoList" >
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
          {!details.downvotes?.includes(userId) && !details.upvotes?.includes(userId) && userId &&
          <>
          <button id="upvote" onClick={()=> vote('upvote')}>
            <img id="likeButton" src={likeIcon} alt="" />
          </button>
          <button id="downvote"onClick={()=> vote('downvote')}>
            <img id="dislikeButton" src={disklikeIcon} alt=""></img>
          </button>
          </>
          }
          <p id="rating">User rating: {(details.upvotes?.length) - (details.downvotes?.length)}K</p>
        </div>
      </div>

      <p className="description">
        {details.description}
      </p>
      <CommentForm/>
      <ul id="comments" >
      {comments?.map(x => <CommentCard key={x._id} title={x.title} text={x.text} owner={x.owner} />)}
      </ul>
    </>
  );
};


