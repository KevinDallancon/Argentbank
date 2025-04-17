import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import Headers from "../../components/Headers/Headers";
import UserInfo from "../../components/UserInfo/UserInfo";
import mockData from "../../data/data";

const Profile = () => {
  // Vérification d'authentification
  const { token, user, isAuthenticated } = useSelector(state => state.authentification);
  
  // Rediriger vers la page de login si non authentifié
  if (!isAuthenticated || !token) {
    return <Navigate to="/login" />;
  }

  if (!user) {
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

  const accounts = mockData.account;

  return (
    <>
      <Headers />
      <main className="main bg-dark">
        <UserInfo firstName={user.firstName} lastName={user.lastName} />
        <h2 className="sr-only">Accounts</h2>
          {accounts.map((account, index) => (
            <Account
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
      </main>
      <Footer />
    </>
  );
};

export default Profile;