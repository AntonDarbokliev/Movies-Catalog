import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/images/logo.png'


export const NavBar = () => {
    return (
        <nav className="navBar">
            <img src={logo} alt="logo" className='logo'/>
            <Link to="/" className='link'>Home</Link>
            <Link to="/catalog" className='link'>Catalog</Link>
            <Link to="/about" className='link'>About</Link>
        </nav>
    )
} 