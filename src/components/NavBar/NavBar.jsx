import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/images/logo.png'
import { Dropdown } from '../User/Dropdown/DropDown.jsx'

export const NavBar = () => {
    return (
        <div className="navBar">
            <img src={logo} alt="logo" className='logo'/>
            <Link to="/" className='link'>Home</Link>
            <Link to="/about" className='link'>About</Link>
            <Dropdown/>
            
        </div>
    )
} 