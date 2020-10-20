import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img
          src="https://i.pinimg.com/originals/b8/5f/58/b85f58e2e1e38407f50ea4e2cf30f08f.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="options">
        <Link className="option" to="/about">
          About
        </Link>
        <Link className="option" to="/experience">
          Experience
        </Link>
        <Link className="option" to="/projects">
          Projects
        </Link>
        <Link className="option" to="/clients">
          Clients
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};


export default Header;
