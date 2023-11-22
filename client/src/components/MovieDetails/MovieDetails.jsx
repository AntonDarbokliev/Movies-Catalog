import "./MovieDetails.css";
import likeIcon from "../../assets/images/like.png";
import disklikeIcon from "../../assets/images/dislike.png";
import editIcon from "../../assets/images/editIcon.png";
import binIcon from "../../assets/images/bin.png";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieFactory } from "../../services/movieService.js";
import { commentFactory } from "../../services/commentService.js";
import { CommentCard } from "../Comment/CommentCard/CommentCard.jsx";
import { CommentForm } from "../Comment/CommentForm/CommentForm.jsx";
import { useMovieContext } from "../../contexts/MovieContext.jsx";
import { useAuthContext } from "../../contexts/AuthContext.jsx";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [showAddComment, setShowAddComment] = useState(false);
  const {userId} = useAuthContext();
  const {onDelete , vote, extractYouTubeVideoId} = useMovieContext()

  const movieService = movieFactory();
  const commentService = commentFactory();

  useEffect(() => {
    movieService
      .get(`/${movieId}`)
      .then((movie) => setDetails(movie))
      .catch((err) => console.error(err));
  }, [movieId]);

  useEffect(() => {
    commentService
      .get()
      .then((data) => {
        const movieComments = data.filter((x) => x.movieId === movieId);
        setComments(movieComments);
      })
      .catch((err) => console.error(err));
  }, [details]);

  const onShowAddComment = () => {
    setShowAddComment(true);
  };

  const onVoteSubmit = async (voteType,movieId,userId) => {
      const updatedMovie =  await vote(voteType,movieId,userId)
      setDetails(updatedMovie)
  }

  return (
    <>
      <span id="titleButtonsWrap">
        <h1 id="title">{details.name}</h1>
        {details.owner?.id === userId && (
          <div id="buttonsWrap">
            <Link to={`/movie/${movieId}/edit`}>
              <img src={editIcon} id="editIcon"></img>
            </Link>
            <button id="deleteButton" onClick={() => onDelete(movieId)}>
            <img src={binIcon} id="editIcon"></img>
            </button>
          </div>
        )} 
      </span>
      <div className="container">
        <div className="imageDiv">
          <img className="movieImage" src={details.moviePoster} id="poster" />
        </div>
        <script
          src="https://www.youtube.com/iframe_api"
          crossOrigin="anonymous"
        ></script>

        <div className="videoPlayer">
          <iframe
            width="580"
            height="400"
            src={
              "https://www.youtube.com/embed/" +
              (details.movieTrailer
                ? extractYouTubeVideoId(details.movieTrailer)
                : "")
            }
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="movieInfo">
          <ul id="movieInfoList">
            <li id="director">
              <span>Director:</span> {details.director}
            </li>
            <li id="movieYear">
              <span>Year:</span> {details.year}
            </li>
            <li id="topCast">
              <span> Top Cast:</span> {details.topCast?.join(", ")}
            </li>
            <li id="publisher">
              <span> Publisher:</span> {details.owner?.username}
            </li>
          </ul>
        </div>
      </div>

      <div className="movieImages">
        <ul>
          {details.movieImages?.map((x) => (
            <img
              key={x._id}
              className="movieImage"
              src={x.movieImage}
              alt={x._id}
            />
          ))}
        </ul>
      </div>

      <div className="genreRating">
        <p className="genres"> {details.genres?.join(", ")}</p>
        <div className="ratingDiv">
          {!details.downvotes?.includes(userId) &&
            !details.upvotes?.includes(userId) &&
            userId && (
              <>
                <button id="upvote" onClick={() => onVoteSubmit("upvote",movieId,userId)}>
                  <img id="likeButton" src={likeIcon} alt="" />
                </button>
                <button id="downvote" onClick={() => onVoteSubmit("downvote",movieId,userId)}>
                  <img id="dislikeButton" src={disklikeIcon} alt=""></img>
                </button>
              </>
            )}
          <p id="rating">
            User rating: {details.upvotes?.length - details.downvotes?.length}K
          </p>
        </div>
      </div>

      <p className="description">{details.description}</p>

      {showAddComment && (
        <CommentForm
          comments={comments}
          setComments={setComments}
          setShowAddComment={setShowAddComment}
        />
      )}
      {!showAddComment && (
        <button id="addComment" onClick={onShowAddComment}>
          Add Comment
        </button>
      )}
      <ul id="comments">
        {comments?.map((x) => (
          <CommentCard
            key={x._id}
            title={x.title}
            text={x.text}
            owner={x.owner}
          />
        ))}
      </ul>
    </>
  );
};
