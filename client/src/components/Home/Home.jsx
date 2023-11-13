import './Home.css'
import { MovieCard } from '../Shared/MovieCard/MovieCard.jsx'
import { useEffect, useState } from 'react'
import { requestFactory } from '../../services/requester.js'

export const Home = () => {
    const [movies,setMovies] = useState([])
    const baseUrl = 'http://localhost:3000/movie'

    useEffect(() => {
        requestFactory.get(baseUrl)
            .then( data => setMovies(data))
            .catch(err => console.log(err))
   },[])

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