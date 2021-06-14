import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="pie">
          <p className="direccion">Direccion</p>
          <p className="texto">Ctra.Lluc a Pto Pollensa, km 4,85</p>
          <p className="texto">07460 Pollensa</p>
          <p className="texto">Mallorca España</p>
        </div>
        <div className="pie">
          <p className="contacto">Contacto</p>
          <p className="texto">(+34)666999666</p>
          <p className="texto">vparadise@gmail.com</p>
          <p></p>
        </div>
        <div className="pie">
          <p className="servicios">Servicios</p>
          <p className="texto">Aparcamiento</p>
          <p className="texto">Conexion Wi-Fi</p>
          <p className="texto">Desayuno incluido</p>
        </div>
        <div className="pie">
          <p className="condiciones">Condiciones</p>
          <p className="condiciones">Proteccion datos</p>
        </div>
        <div className="pie">©Lucía Bermejo</div>
      </footer>
    );
  }
}

export default Footer;
