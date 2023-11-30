import './RatingCard.css'

export const RatingCard = ({children,icon,title,year,genres}) => {
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