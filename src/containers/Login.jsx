import React from 'react';
import '../assets/styles/containers/Login.scss';
import googleIcon from '../assets/static/google-icon.webp'; 
import twitterIcon from '../assets/static/twitter-icon.webp'; 


 const Login = () => (
  <section className="login">
  <section className="login__container">
    <h2 tabIndex="0">Inicia sesión</h2>
    <form className="login__container--form">
      <input
        aria-label="Correo"
        type="text"
        className="input"
        placeholder="Correo"
      />
      <input
        aria-label="Contraseña"
        type="password"
        className="input"
        placeholder="Contraseña"
      />
      <button className="button">Iniciar sesión</button>
      <div className="login__container--remember-me">
        <label htmlFor="rememberMe">
          <input type="checkbox" id="rememberMe" />
          Recuérdame
        </label>
        <a href="">Olvidé mi contraseña</a>
      </div>
    </form>

    <section className="login__container--social-media">
      <div className="button button__login-google">
        <img src={googleIcon} alt="" />Inicia sesión con
        Google
      </div>
      <div className="button button__login-twitter">
        <img src={twitterIcon} alt="" />Inicia sesión con
        Twitter
      </div>
    </section>
    <p className="login__container--register">
      No tienes ninguna cuenta
      <a href="">Regístrate</a>
    </p>
  </section>
</section>
 );

 export default Login;