import React from "react";
import './Footer.scss';

class Footer extends React.Component {

    render() {
        // let whatsapp = {};
        // whatsapp.avatarUrl = './img/whatsapp.png';
        // let facebook = {};
        // facebook.avatarUrl = './img/facebook.png';
        // let gorjeo = {};
        // gorjeo.avatarUrl = './img/gorjeo.png';
        // let instagram = {};
        //instagram.avatarUrl = './img/instagram.png';
        // let linkedin = {};
        // linkedin.avatarUrl = './img/linkedin.png';
        return (
            <footer className="footer">
                <div className="contacto">Contacto</div>
                <div className="servicios">Servicios</div>
                <div className="condiciones">Condiciones</div>
                <div>©Lucía Bermejo</div>

                {/* <img src={instagram.avatarUrl} alt="icono instagram" />  */}
            </footer>
        );
    };
};

export default Footer;