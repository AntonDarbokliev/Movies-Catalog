import likeIcon from "../../../assets/images/like.png";
import dislikeIcon from "../../../assets/images/dislike.png";
import "./UserRatings.css";

export const UserRatings = () => {
  return (
    <div id="userRatingsDiv">
      <h1 id="header">Anton's Ratings</h1>
      <ul id="userRatings">
      <li className="ratedMovie">
          <img
            id="movieImage"
            src="https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
            alt="poster"
          />
          <div id="movieRating">
            <p>Five nights at Freddy's</p>
            <img id="ratingIcon" src={likeIcon} alt="like/dislike icon" />
          </div>
        </li>
        <li className="ratedMovie">
          <img
            id="movieImage"
            src="https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
            alt="poster"
          />
          <div id="movieRating">
            <p>Five nights at Freddy's</p>
            <img id="ratingIcon" src={dislikeIcon} alt="like/dislike icon" />
          </div>
        </li>
      </ul>
    </div>
  );
};
