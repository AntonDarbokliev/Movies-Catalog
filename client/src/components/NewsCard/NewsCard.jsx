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
    
    return (
        <div id="newsCard">
            <h2 id="newsTitle">{title}</h2>
            <p id="newsDate">{publishedAt}</p>
            <img src={image}/>
            <p id="newsDesc">{description}</p>
            <p id="newsSrc"><span className="yellowSpan">Source:</span> <strong>{source}</strong></p>
            <a id="newsUrl" href={url}>
                <SubmitButton text={'Read More'}/>            
            </a>
        </div>
    )
}