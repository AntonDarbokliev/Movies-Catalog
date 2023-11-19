import { Link } from "react-router-dom"
import './CommentCard.css' 


export const CommentCard = ({
    title,
    text,
    owner
}) => {
    return (
        <li id="commentCard">
            <h3 id="commentTitle">{title}</h3>
            <Link id="commentUsername" to={`/user/${owner._id}/ratings`}>{owner.username}</Link>
            <p id="commentText" >{text}</p>
        </li>
    )
}