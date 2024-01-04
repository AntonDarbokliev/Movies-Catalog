import { ReactNode } from 'react'
import './RatingCard.css'

interface RatingCardProps {
    children : ReactNode
    icon: string,
    title:string,
    year:number,
    genres:string[]
}

export const RatingCard:React.FC<RatingCardProps> = ({children,icon,title,year,genres}) => {
    return (
        <div  id='ratingDiv'>
            {children}
            <div id='movieInfo'>
                <h2 id='movieTitle'>{title}</h2>
                <h4 id='movieYear'>{year}</h4>
                <h4 id='movieGenres'>{genres.join(', ')}</h4>
            </div>
            <img id='voteIcon' src={icon} alt="vote" />
        </div>
    )
}