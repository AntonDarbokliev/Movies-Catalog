import { Fade } from 'react-awesome-reveal';
import './About.css'

export const About = () => {
  
  return (
    <>
      <h1 id='aboutTitle'>About</h1>
      <div id="aboutInfo">
          <Fade>
        <p id="info">
          Movie Ratings Catalog is a user-friendly online platform that provides
          a comprehensive collection of movies from various genres and eras.
          Users can explore a vast library of films, read detailed information
          about each movie, and share their own experiences by rating them.
          Whether you are a film enthusiast or just looking for your next movie
          night selection, Movie Ratings Catalog helps you discover, rate, and
          keep track of your favorite films. Join our community of cinephiles
          and share your thoughts on the silver screen!
        </p>
            </Fade>

      </div>
        <h2 className='aboutLink'>Link to GitHub repository - <a style={{color:'#136cb2'}} href="https://github.com/AntonDarbokliev/Movies-Catalog">https://github.com/AntonDarbokliev/Movies-Catalog</a></h2>  
        <h2 className='aboutLink'>Link to LinkedIn profile - <a style={{color:'#136cb2'}} href="https://www.linkedin.com/in/anton-darbokliev-778054293/">https://www.linkedin.com/in/anton-darbokliev-778054293</a></h2>  
             
    </>
  );
};
