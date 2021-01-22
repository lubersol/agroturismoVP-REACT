import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router";
import { notification } from 'antd';

const Admin = ({ user, setUser }) => {
    const history = useHistory();
    const [rents, setRents] = useState([]);
    useEffect(() => {
        const options = { headers: { Authorization: `Bearer ${user.token}` } };
        axios.get('http://localhost:8000/rent/showAll', options)
            .then((res) => {
                console.log(res.data)
                setRents(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, [])
    const logout = async () => {
        try {
            let token = localStorage.getItem('authToken')
            const options = {
                headers: { Authorization: `Bearer ${token}` }
            }
            await axios.post('http://localhost:8000/api/auth/logout', {}, options)
            localStorage.removeItem('user')
            localStorage.removeItem('authToken')
            setUser(null)
            notification.success({ message: 'Hasta pronto!', description: 'Gracias por visitarnos!' })
            setTimeout(() => {
                history.push('/')
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='mainContainer'>
            <div className='appointmentContainer'>
                {rents?.map(rent =>
                    <div key={rent._id} className='info'>
                        <div className='contenedor'>{rent.startDate}</div>
                        <div className='contenedor'>{rent.endDate}</div>
                    </div>)}
            </div>
            <div className="logout">
                <button className='logoutButton' onClick={logout}>Logout</button>
            </div>
        </div>

    )
}

export default Admin;
