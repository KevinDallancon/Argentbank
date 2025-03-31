import React from "react";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import Headers from "../../components/Headers/Headers";
import UserInfo from "../../components/UserInfo/UserInfo";

const Profil = () => {
  return (
    <>
      <Headers />
        <main className="main bg-dark">
        <UserInfo />
        <h2 className="sr-only">Accounts</h2>
        <Account />
        </main>
      <Footer />
    </>
  );
};

export default Profil;