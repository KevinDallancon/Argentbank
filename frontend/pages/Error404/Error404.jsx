import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/Headers/Headers';

const Error404 = () => {
  return (
    <>
      <Headers />
      <main className="main bg-dark">
        <div className="error-container">
          <h1>404</h1>
          <h2>Page non trouvée</h2>
          <p>
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="error-home-button">
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error404;