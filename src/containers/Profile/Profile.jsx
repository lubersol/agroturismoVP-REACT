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
            <header className="cajaTitulo">
                <p className="titular">Area cliente</p>
            </header>
            <section className='logout'>
                <button className='logoutButton' onClick={logout}>Logout</button>
            </section>
            <section className='reserva'>
                <Link to='/rents'>Mis reservas</Link>
            </section>
        </div>
    )
}

export default Profile;
