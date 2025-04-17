import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { useFetchUserProfileQuery } from '../../src/Redux/Services/apiServices';
import { logout } from '../../src/Redux/Slices/authentificationSlice';
import './Headers.css';

const Headers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useSelector(state => state.authentification);
  
  // Utiliser RTK Query pour récupérer le profil utilisateur
  const { refetch } = useFetchUserProfileQuery(undefined, {
    skip: !token, // Ne pas exécuter la requête si pas de token
  });

  // Récupérer le profil utilisateur lorsque le token est disponible
  useEffect(() => {
    if (token && !user) {
      refetch();
    }
  }, [token, user, refetch]);

  // Fonction de déconnexion
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
        {isAuthenticated ? (
          <div className="container-flex">
            <Link className="main-nav-item" to="/profile">
            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
               {user?.firstName || 'Mon Profil'}
            </Link>
            <Link className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="sign-out-icon" />
               Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
            Sign In
          </Link>
        )}
      
    </nav>
  );
};

export default Headers;