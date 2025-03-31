import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Headers from "../../components/Headers/Headers";


const Login = () => {


  return (
    <>
      <Headers />
      <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button
            type="submit"
            className="sign-in-button"
            text={ 'Sign In'}
          />
        </form>
      </section>
    </main>
      <Footer />
    </>
  );
};

export default Login;