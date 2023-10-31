import { Link } from 'react-router-dom'
import './NavBar.css'
import img from '../../../public/images/playLogo.png'

export const NavBar = () => {
    return (
        <nav className="navBar">
            <img src="." alt="logo"/>
            <Link to="/" className='link'>Home</Link>
            <Link to="/catalog" className='link'>Catalog</Link>
            <Link to="/about" className='link'>About</Link>
        </nav>
    )
} 