import React from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { notification } from "antd";

const Header = ({ user, setUser, setMostrarLogin, setMostrarRegister }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    setUser(null);
    notification.success({
      message: "Hasta pronto!",
      description: "Gracias por tu visita!",
    });
    history.push("/");
  };

  return (
    <header className="cabecera">
      <div className="logo">
        <img src="/images/logoVP.png" alt="logotipo varitx paradise"></img>
      </div>
      <nav className="menu">
        <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
        {!user && (
          <>
            <Link to="/gallery">Galeria</Link>
            <Link to="/register" onClick={() => setMostrarRegister(true)}>
              Registro
            </Link>
            <Link to="/login" onClick={() => setMostrarLogin(true)}>
              Login
            </Link>
          </>
        )}
        {user && (
          <>
            <Link to="/gallery">Galeria</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
