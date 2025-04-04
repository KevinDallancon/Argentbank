import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Headers from "../../components/Headers/Headers";
import { useAuthUserMutation } from "../../src/Redux/Services/apiServices";
import { loginSuccess } from "../../src/Redux/Slices/authentificationSlice";

const Login = () => {
  // État local pour les champs du formulaire
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  // Hook RTK Query pour l'appel API login
  const [login, { isLoading }] = useAuthUserMutation();
  
  // Hook Redux pour dispatcher des actions
  const dispatch = useDispatch();
  
  // Hook de navigation pour rediriger après login
  const navigate = useNavigate();

  // Fonction qui gère la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Appel à l'API de login
      const result = await login({ 
        email: username, 
        password: password 
      }).unwrap();
      console.log('Token reçu:', result.body.token);
      
      // Stockage du token et des infos utilisateur dans Redux
      dispatch(loginSuccess({
        token: result.body.token,
        user: {
          firstName: result.body.firstName,
          lastName: result.body.lastName
        }
      }));
      
      // Redirection vers la page de profil
      navigate('/profile');
      
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur de connexion:', error);
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  return (
    <>
      <Headers />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input 
                type="checkbox" 
                id="remember-me" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button
              type="submit"
              className="sign-in-button"
              text={isLoading ? "Connexion..." : "Sign In"}
              disabled={isLoading}
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;