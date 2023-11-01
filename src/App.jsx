import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Home } from './components/Home/Home.jsx'
function App() {

  return (
    <>
    <NavBar/>
    <div className='main'>
    <Home/>
    </div>
    <Footer/>
    </>
  )
}

export default App
