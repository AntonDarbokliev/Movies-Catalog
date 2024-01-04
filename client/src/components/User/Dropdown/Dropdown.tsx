import { Link } from 'react-router-dom';
import userIcon from '../../../assets/images/userIcon.png'
import './Dropdown.css'
import { Logout } from '../../Auth/Logout/Logout';
import { useAuthContext } from '../../../contexts/AuthContext';

export const Dropdown = () => {
    const {userId} = useAuthContext()
  return (
    <div className="dropdown" >
      <button className="dropbtn"><img id='userIcon' src={userIcon} alt="userIcon"/></button>
      <div className="dropdown-content">
        <Link to={`user/${userId}/ratings`}>Ratings</Link>
        <Logout/>
      </div>
    </div>
  );
};
