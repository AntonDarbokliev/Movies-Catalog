import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/images/logo.png'
import { Dropdown } from '../User/Dropdown/DropDown.jsx'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx'

export const NavBar = () => {
    const {isAuthenticated} = useContext(AuthContext)

    return (
        <div className="navBar">
            <img src={logo} alt="logo" className='logo'/>
            <Link to="/" className='link'>Home</Link>
            <Link to="/movie/catalog?page=1&pageSize=8&name=&genres=" className='link'>Catalog</Link>
            {isAuthenticated && 
            <>
            <Link to="/movie/create" className='link'>Create</Link>
            <Link to="/about" className='link'>About</Link>
            <Dropdown/>
            </>
            }
            {!isAuthenticated &&
            <>
            <Link to="/about" className='link'>About</Link>
            <Link to="/user/register" className='link'>Register</Link>
            <Link to="/user/login" className='link'>Login</Link>
            </>
            }
            
        </div>
    )
} 