import React from "react";
import "./NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import {IoMdNotificationsOutline} from "react-icons/io";

const NavBar = () => {
  const accessToken = localStorage.getItem("jwt-token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(accessToken);
    navigate("/");
  };
  return (
    <div className="header-section">
      <div className="sensex-container">
        <p className="sensex-text">NIFTY<span>24813</span>129.83(0.53%)</p>
        <p className="sensex-text">SENSEX <span>81589.86</span> 403.42(0.50%)</p>
        </div>
        <nav className="navbar">
      <div>
      <Link to="/dashboard">
        <img
          src="https://kite.zerodha.com/static/images/kite-logo.svg"
          alt="kite-logo"
          height={50}
          width={50}
        />
      </Link>
      </div>
      <div className="nav-link-container">
        <div className="nav-container">
          <ul className="link-container">
            <li><NavLink to="./dashboard" className="nav-link">Dashboard</NavLink></li>
            <li><NavLink to="./orders" className="nav-link">Orders</NavLink></li>
            <li><NavLink to="./holdings" className="nav-link">Holdings</NavLink></li>
            <li><NavLink to="./positions" className="nav-link">Positions</NavLink></li>
            <li><NavLink to="./bids" className="nav-link">Bids</NavLink></li>
            <li><NavLink to="./funds" className="nav-link">Funds</NavLink></li>
          </ul>
          <div className="icons-container">
            <IoCartOutline className='navbar-icon'/>
            <IoMdNotificationsOutline className='navbar-icon'/>

          </div>
        </div>
        <button className="login-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div>

      </div>
      </nav>
    </div>
  );
};
export default NavBar;
