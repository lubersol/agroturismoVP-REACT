import React from "react";
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import { notification } from 'antd';


const Header = ({ user, setUser, setMostrarLogin, setMostrarRegister }) => {
const history = useHistory();
  const logout = () => {
    localStorage.clear();
    setUser(null)
    notification.success({ message: "Hasta pronto!", description: "Gracias por tu visita!" })
    history.push("/");
  }

  // render() {
  return (
    <div className="header">
      <div className="logo"><img src="/images/logoVP.png" alt="logotipo varitx paradise" />
      </div>
      <nav className="menu">
        <Link to="/">Inicio</Link>
        {!user && <>
          <Link to="/gallery">Galeria</Link>
          <Link to="/register" onClick={() => setMostrarRegister(true)}>Registro</Link>
          <Link to="/login" onClick={() => setMostrarLogin(true)}>Login</Link>
        </>}
        {user && <>
          <Link to="/gallery">Galeria</Link>
          <Link to="/" onClick={logout}>Logout</Link>
        </>
        }
      </nav>
    </div>
  );
}


export default Header;