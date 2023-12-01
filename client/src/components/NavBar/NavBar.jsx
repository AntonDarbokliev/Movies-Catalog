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
            <Link to="/" className='link'><img src={logo} alt="logo" className='logo'/></Link>
            <Link to="/" className='link'>Home</Link>
            <Link to="/movie/catalog" className='link'>Catalog</Link>
            <Link to="/news" className='link'>News</Link>
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