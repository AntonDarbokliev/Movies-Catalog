import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Home } from './components/Home/Home.jsx'
import { Routes,Route } from 'react-router-dom'
import { MovieDetails } from './components/MovieDetails/MovieDetails.jsx'
function App() {

  return (
    <>
    <NavBar/>
    <div className='main'>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movie/:movieId/details' element={<MovieDetails/>}></Route>
      <Route path='*' element={<h1 style={{color : 'white'}}>Page not found (404)</h1>}></Route>      
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
