import './Home.css'
import { HomeMovie } from './HomeMovie.jsx'
export const Home = () => {
    return (
        <>
        <div className='headerDiv'>
        <h1 className='heading'>Latest releases</h1>
        </div>
        <div className='homeMovies'>
            <HomeMovie imageUrl='https://m.media-amazon.com/images/M/MV5BNWI3ZmY4NmItMGQ4My00ODJlLWJlNTktYjk2NzRkODU3YTNlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg' 
            movieId={15}/>
            <HomeMovie imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
             <HomeMovie imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
             <HomeMovie imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
            <HomeMovie imageUrl='https://m.media-amazon.com/images/M/MV5BMmJhYjBkMzgtZGIwMC00YTAzLWE4NTQtYzVkNDVmYjIzODI0XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_FMjpg_UX1000_.jpg' 
            movieId={12}/>
                         
        </div>
        </>
    )
}