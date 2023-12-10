import { Fade } from "react-awesome-reveal"
import { SubmitButton } from "../Shared/SubmitButton/SubmitButton.jsx"
import './NewsCard.css'


export const NewsCard = ({
    title,
    description,
    publishedAt,
    source,
    url,
    image
}) => {
    const publishDate = (new Date(publishedAt)).toLocaleDateString()
    
    return (
        <Fade>
        <div id="newsCard">
            <h2 id="newsTitle">{title}</h2>
            <p id="newsDate">{publishDate}</p>
            <img src={image}/>
            <p id="newsDesc">{description}</p>
            <p id="newsSrc"><span className="yellowSpan">Source:</span> <strong>{source}</strong></p>
            <a id="newsUrl" href={url}>
                <SubmitButton text={'Read More'}/>            
            </a>
        </div>
         </Fade>
    )
}