import './Home.css'
import { MovieCard } from '../Shared/MovieCard/MovieCard.jsx'
import { useEffect, useState } from 'react'
export const Home = () => {
    const [movies,setMovies] = useState([])

    useEffect(() => {
            fetch('http://localhost:3000/movie')
            .then( res => res.json())
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