import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video.png'
import userIcon from '../assets/static/user.png'
import { logoutRequest } from '../redux/actions';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({})
  };
  return (
    <header className="header">
      <Link to="/">
        <img
          tabIndex="0"
          className="header__img"
          src={logo}
          alt="Platzi vídeo"
        />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ? <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <>
                <li><a href="">{user.name}</a></li>
                <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
              </>
              :
              <li><Link to="/login">Iniciar sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );

}

const mapDispatchToProps = {
  logoutRequest
}
const mapStateToProps = (state) => ({
  user: state.user
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
