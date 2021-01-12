import React from "react";
import './Footer.scss';

class Footer extends React.Component {

    render() {
        
        return (
            <footer className="footer">
                <div>
                    <p className="direccion">Direccion</p>
                    <p className="texto">Ctra.Lluc a Pto Pollensa, km 4,85</p>
                    <p className="texto">07460 Pollensa</p>
                    <p className="texto">Mallorca España</p>
                </div>
                <div><p className="contacto">Contacto</p>                    <p className="texto">(+34)696925484</p>
                    <p className="texto">vparadise@gmail.com</p>
                    <p></p>
                </div>
                <div><p className="servicios">Servicios</p></div>
                <div>
                    <p className="condiciones">Condiciones</p></div>
                <div>©Lucía Bermejo</div>

                {/* <img src={instagram.avatarUrl} alt="icono instagram" />  */}
            </footer>
        );
    };
};

export default Footer;