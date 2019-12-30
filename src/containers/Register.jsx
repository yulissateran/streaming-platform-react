import React, { useState } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {registerRequest} from '../redux/actions'

import "../assets/styles/containers/Register.scss";

const Register = (props) => {
  const [form, setValues] = useState({
    email: null,
    name: null,
    password: null
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit=event=>{
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/')

    console.log('registered', form);
    
  };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form 
        onSubmit={handleSubmit}
        className="register__container--form">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            type="text"
            name="email"
            className="input"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
        </form>
        <p className="register__container--login">
          <Link to="/login">Iniciar sesión</Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToPprops={
  registerRequest,
 }
export default connect(null,mapDispatchToPprops)(Register);
