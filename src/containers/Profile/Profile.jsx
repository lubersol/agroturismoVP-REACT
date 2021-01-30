import React from 'react';
import './Profile.scss';
import { Link } from 'react-router-dom';
import { useHistory, } from "react-router";
import { notification, } from 'antd';

const Profile = (props) => {

    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        props.setUser(null)
        notification.success({ message: "Hasta pronto!", description: "Gracias por tu visita!" })
        history.push("/");
    }
    
    return (
        <div className="mainContainer">
            <header className="cajaTitulo">
                <p className="titularP">Area cliente</p>
            </header>
            <section className="logout">
                <button className="logoutButton" onClick={logout}>Logout</button>
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
