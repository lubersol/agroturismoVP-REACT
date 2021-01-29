import React from 'react';
import axios from 'axios'
import './Profile.scss';
import { Link } from 'react-router-dom';
import { useHistory, } from "react-router";
import { notification, } from 'antd';

const Profile = (props) => {

    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        props.setUser(null)
        notification.success({ message: 'Hasta pronto!', description: 'Gracias por tu visita, esperamos verte pronto!' })
        history.push("/");
    }
    // try {
    //     // let token = localStorage.getItem('authToken');
    //     const options = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     };
    //     console.log(token)
    //     await axios.get('http://localhost:8000/api/auth/logout')
    //     localStorage.clear('user');
    //     // localStorage.clear('authToken');
    //     setUser(null)

    // setTimeout(() => {
    //     history.push('/')
    // }, 1000);
    // } catch (error) {
    //     console.log(error);
    // }


    return (
        <div className='mainContainer'>
            <header className='cajaTitulo'>
                <p className='titularP'>Area cliente</p>
            </header>
            <section className='logout'>
                <button className='logoutButton' onClick={logout}>Logout</button>
            </section>
            <div className='cajaReservas'>
                <section className='misReservas'>
                    <Link to='/rents' className='botonReserva'>Mis reservas</Link>
                </section>
                <section className='misReservas'>
                    <Link to='/' className='botonReserva'>Reservar</Link>
                </section>

            </div>
            <div className="cajaFotos">
                {/* <section className='fotoFlores'><img src="/images/piscina2.jpg" alt="foto piscina varitx pollensa" />
                </section> */}
                <img src="/images/hamacas_piscina.jpg" alt="foto exterior piscina hamacas varitx paradise" />
            </div>
        </div>
    )
}

export default Profile;
