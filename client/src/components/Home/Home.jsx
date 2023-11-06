import './Home.css'
import { MovieCard } from '../Shared/MovieCard/MovieCard.jsx'
import { useEffect, useState } from 'react'
export const Home = () => {
    const [message,setMessage] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(data => setMessage(data))
            .catch(err => console.log(err))
    },[])

    console.log(message);

    return (
        <>
        <div className='headerDiv'>
        <h1 id='header'>Latest releases</h1>
        </div>
        <div className='homeMovies'>
            <MovieCard imageUrl='https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg' 
            movieId={15}/>
            <MovieCard imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
             <MovieCard imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
             <MovieCard imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
            <MovieCard imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
                         
        </div>
        </>
    )
}