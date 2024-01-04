import './Home.css'
import { MovieCard } from '../Shared/MovieCard/MovieCard'
import { useMovieContext } from '../../contexts/MovieContext'
import { useEffect, useState } from 'react'
import { MovieData } from '../../types/movieData'

export const Home = () => {
    const {getLastThree} = useMovieContext()
    const [movies,setMovies] = useState<MovieData[]>([])

    useEffect(() => {
        getLastThree()
        .then(data => {
            setMovies(data)
        } )
        .catch((err) => console.log(err))
    },[setMovies,getLastThree])
     
    return (
        <>
        <div className='headerDiv'>
        <h1 id='header'>Latest releases</h1>
        </div>
        <div className='homeMovies'>
            {movies?.map( movie => <MovieCard imageUrl={movie.moviePoster} movieId={movie._id!} key={movie._id}/>)}                         
        </div>
        </>
    )
}