import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/images/logo.png'
import { Dropdown } from '../User/Dropdown/DropDown.jsx'

export const NavBar = () => {
    return (
        <div className="navBar">
            <img src={logo} alt="logo" className='logo'/>
            <Link to="/" className='link'>Home</Link>
            <Link to="/movie/catalog" className='link'>Catalog</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/user/login" className='link'>Login</Link>
            <Link to="/user/register" className='link'>Register</Link>
            <Dropdown/>
            
        </div>
    )
} 