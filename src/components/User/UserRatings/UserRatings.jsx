import likeIcon from '../../../assets/images/like.png'
import dislikeIcon from '../../../assets/images/dislike.png'

export const UserRatings = () => {
    return(
        <div id="userRatingsDiv">
        <h1>Anton's Ratings</h1>
        <ul id="userRatings">
            <li>
                <img src="https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" alt="poster" />
                <p>Five nights at Freddy's</p>
                <img src={likeIcon} alt="" />
            </li>
        </ul>
        </div>
    )
}
