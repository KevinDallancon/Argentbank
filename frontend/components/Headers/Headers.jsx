import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';

const Headers = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      </NavLink>
      <NavLink className="main-nav-item" to="/login">
        <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
          Sign In
      </NavLink>
    </nav>
  );
};

export default Headers;