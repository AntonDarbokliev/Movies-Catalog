import userIcon from '../../../assets/images/userIcon.png'
import './Dropdown.css'

export const Dropdown = () => {
  return (
    <div className="dropdown" >
      <button className="dropbtn"><img id='userIcon' src={userIcon} alt="userIcon"/></button>
      <div className="dropdown-content">
        <a href="user/1/ratings">Ratings</a>
        <a href="/user/logout">Logout</a>
      </div>
    </div>
  );
};
