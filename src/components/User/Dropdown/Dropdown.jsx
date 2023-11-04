import { Link } from 'react-router-dom';
import userIcon from '../../../assets/images/userIcon.png'
import './Dropdown.css'


export const Dropdown = () => {
  return (
    <div className="dropdown" >
      <button className="dropbtn"><img id='userIcon' src={userIcon} alt="userIcon"/></button>
      <div className="dropdown-content">
        <Link to="user/1/ratings">Ratings</Link>
        <Link to="/user/logout">Logout</Link>
      </div>
    </div>
  );
};
