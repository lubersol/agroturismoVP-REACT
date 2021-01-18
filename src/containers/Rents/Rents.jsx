import React from 'react';
import axios from 'axios'
import './Rents.scss';
import { Input, notification } from 'antd';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Rents = () => {
    const history = useHistory();
    const token = localStorage.getItem('authToken')
    const handleSubmit = event => {
        event.preventDefault();
        const headers = { headers: { Authorization: `Bearer ${token}` } };
        const rentBody = {
            createdAt: event.target.createdAt.value,
            updatedAt: event.target.updatedAt.value,
        };
        //revisar ruta AXIOS!!!!!!
        axios.post(process.env.REACT_APP_BASE_URL + '/rent/create', rentBody, headers)
            .then(res => {
                console.log(res.data)
                notification.success({ message: 'Reserva creada', description: 'Has seleccionado las fechas de tu reserva correctamente' })

                setTimeout(() => {
                    history.push("/")
                }, 1500);
            }).catch(error => {
                console.log(error)
                notification.error({ message: 'Error al seleccionar las fechas', description: 'Se ha producido un error a la hora de seleccionar las fechas' })
            })
    }
    return (
        <div className='create'>
            <div className="headerCreate">
            </div>
            <form className="create-form" onSubmit={handleSubmit}>
                <Input type="date" name="date_appointment" required placeholder="Write date" />
                <button type="primary" className='noStyle' htmlType="submit">Reservar</button>
            </form>
        </div>
    )
}

export default Rents;
