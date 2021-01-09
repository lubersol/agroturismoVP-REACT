import React from "react";
//import { Button, notification } from 'antd';
import './Header.css';
import React from "react";
import {Link} from 'react-router-dom';

// class component
class Header extends React.Component {
  render() {
    return (
      <header className="header">
              <div className='logo'></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/entorno">Entorno</Link>
          <Link to="/habitaciones">Habitaciones</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/registro">Registro</Link>
          <Link to="/login">Login</Link>

        </nav>
      </header>
    );
  }
}
 
export default Header;