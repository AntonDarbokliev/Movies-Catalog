import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/images/logo.png'


export const NavBar = () => {
    return (
        <ul className="navBar">
            <li><img src={logo} alt="logo" className='logo'/></li>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/about" className='link'>About</Link></li>
            
        </ul>
    )
} 