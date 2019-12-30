import React, { useState } from 'react';
import {connect} from 'react-redux';
import  { Link} from 'react-router-dom';

import {loginRequest} from '../redux/actions'
import '../assets/styles/containers/Login.scss';
import googleIcon from '../assets/static/google-icon.webp'; 
import twitterIcon from '../assets/static/twitter-icon.webp'; 


 const Login = (props) => {
 const [form, setValues]  = useState({ email: null});

 const handleInput = event=>{
   
  setValues({
    ...form, 
    [event.target.name]: event.target.value
  })
 }

 const handleSubmit=event=>{
   event.preventDefault();
   props.loginRequest(form);
   props.history.push('/')
   console.log(form)
 };
  return (
    <section className="login">
    <section className="login__container">
      <h2 tabIndex="0">Inicia sesión</h2>
      <form className="login__container--form" onSubmit={handleSubmit}>
        <input
          aria-label="Correo"
          type="text"
          className="input"
          placeholder="Correo"
          name="email"
          onChange={handleInput}
        />
        <input
          aria-label="Contraseña"
          type="password"
          className="input"
          placeholder="Contraseña"
          name="password"
          onChange={handleInput}
        />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe" name="rememberMe"
          onChange={handleInput}
          />
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
        <Link to="/register">
       Regístrate
        </Link>
      </p>
    </section>
  </section>
   )
 };

 const mapDispatchToPprops={
  loginRequest,
 }

 export default connect(null,mapDispatchToPprops)(Login);