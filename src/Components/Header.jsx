import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = ({ hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img
          src="https://cdn0.iconfinder.com/data/icons/fitness-78/512/636_Laptop_Computer_Dumbbell_Fitness-512.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="options">
        <Link className="option" to="/about">
          About
        </Link>
        <Link className="option" to="/projects">
          Projects
        </Link>
        <Link className="option" to="/training">
          Training
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};


export default Header;
