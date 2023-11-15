import './Home.css'
import { MovieCard } from '../Shared/MovieCard/MovieCard.jsx'
import { useMovieContext } from '../../contexts/MovieContext.jsx'

export const Home = () => {
    const {movies} = useMovieContext()

    return (
        <>
        <div className='headerDiv'>
        <h1 id='header'>Latest releases</h1>
        </div>
        <div className='homeMovies'>
            {movies.map( movie => <MovieCard imageUrl={movie.moviePoster} movieId={movie._id} key={movie._id}/>)}                         
        </div>
        </>
    )
}