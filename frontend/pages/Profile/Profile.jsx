
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import Headers from "../../components/Headers/Headers";
import UserInfo from "../../components/UserInfo/UserInfo";
import { useFetchUserProfileQuery } from '../../src/Redux/Services/apiServices';
import mockData from "../../data/data";


const Profile = () => {
  // Vérification d'authentification
  const { token } = useSelector(state => state.authentification);
    // Récupération des données du profil utilisateur
  const { data, isLoading, error } = useFetchUserProfileQuery();
  // Rediriger vers la page de login si non authentifié
  if (!token) {
    return <Navigate to="/login" />;
  }

// Affichage pendant le chargement
if (isLoading) {
  return (
    <>
      <Headers />
      <main className="main bg-dark">
        <div className="loading-container">
          <p>Chargement de vos informations de profil...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Affichage en cas d'erreur
if (error) {
  return (
    <>
      <Headers />
      <main className="main bg-dark">
        <div className="error-container">
          <p>Erreur lors du chargement du profil : {error.message || "Erreur inconnue"}</p>
          <p>Veuillez réessayer ultérieurement ou contacter le support.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
  // Extraire firstName et lastName des données
  const firstName = data?.body?.firstName;
  const lastName = data?.body?.lastName;
  const accounts = mockData.account;

  return (
    <>
      <Headers />
      <main className="main bg-dark">
        <UserInfo firstName={firstName} lastName={lastName} />
        <h2 className="sr-only">Accounts</h2>
        <section className="accounts-container">
        {accounts.map((account, index) => (
            <Account 
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;