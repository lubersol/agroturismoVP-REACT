import React from "react";
//import { Button, notification } from 'antd';
import './Header.scss';
import {Link} from 'react-router-dom';

// class component
class Header extends React.Component {
  
  render() {
    return (
      <header className="header">
              <div className="logo"></div>
        <nav className="menu">
          <Link to="/">Inicio</Link>
          {/* <Link to="/entorno">Entorno</Link> */}
          {/* <Link to="/rooms">Habitaciones</Link> */}
          {/* <Link to="/gallery">Galeria</Link> */}
          <Link to="/register">Registro</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    );
  }
}
 
export default Header;