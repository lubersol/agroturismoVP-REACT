import React from 'react';
import './Profile.scss';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="mainContainer">
            <section className="cajaTitulo">
                <p className="titular">Area cliente</p>
            </section>
            <div className="cajaReservas">
                <section className="misReservas">
                    <Link to="/rents" className="botonReserva">Mis reservas</Link>
                </section>
                <section className="misReservas">
                    <Link to="/" className="botonReserva">Reservar</Link>
                </section>
            </div>
            <div className="cajaFotos">
                <img src="/images/hamacas_piscina.jpg" alt="foto exterior piscina hamacas varitx paradise" />
            </div>
        </div>
    )
}

export default Profile;
