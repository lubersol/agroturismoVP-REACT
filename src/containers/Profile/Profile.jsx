import React from 'react';
import axios from 'axios'
import './Profile.scss';
import { Link } from 'react-router-dom';
import { useHistory, } from "react-router";
import { notification, } from 'antd';

const Profile = ({ setUser }) => {

    const history = useHistory();
    const logout = async () => {
        try {
            let token = localStorage.getItem('authToken');
            const options = {
                headers: { Authorization: `Bearer ${token}` }
            };
            console.log(token)
            await axios.post('http://localhost:8000/api/user/logout', {}, options)
            localStorage.removeItem('user')
            localStorage.removeItem('authToken')
            setUser(null)

            notification.success({ message: 'Hasta pronto!', description: 'Gracias por tu visita, esperamos verte pronto!' })
            setTimeout(() => {
                history.push('/')
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }
    
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
