import React, { useEffect, useState, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { notification } from 'antd';


const Home = () => {
    const history = useHistory();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const getEmail = async () => {
        try {
            let email = localStorage.getItem('email');
            const res = await axios.get(`http://localhost:8000/api/auth/user/email/${email}`);
            console.log(res);
            localStorage.setItem('user_id', res.data[0].id);
        } catch (error) {
            console.log({ message: 'error' })
        }
    }

    useEffect(() => {
        let entrada = localStorage.getItem('startDate');
        console.log(entrada);
        setStartDate(entrada);
        let salida = localStorage.getItem('endDate');
        console.log(salida);
        setEndDate(salida);
    }, [])

    const handleDateChange = e => {
        setStartDate(e.target.value);
        setEndDate(e.target.value);
        localStorage.setItem('startDate', startDate);
        localStorage.setItem('endDate', endDate);
    }

    getEmail();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const userLogged = localStorage.getItem('user_id') || false;
            if (userLogged) {
                const order = {
                    startDate: startDate,
                    endDate: endDate,
                    room_id: event.target.room.value,
                    user_id: userLogged,
                }
                console.log(order);
                let reserva = await axios.post('http://localhost:8000/api/auth/rent/create', order)
                localStorage.setItem('reserva', reserva.data);
                console.log(reserva);
                notification.success({ message: 'Reserva creada!', description: 'Se ha creado correctamente la reserva' })
                history.push('/profile')
            } else {
                history.push('/login')
            }
        } catch {
            console.log('error')
        }
    }


    return (
        <Fragment>
            <div className="home">
                <section className="contenedorCentral">
                    <section className="picker">
                        <section className="reservar">
                            <p className="welcome">Welcome to Varitx Paradise!</p>
                            <p className="textoPrincipal">Varitx Paradise es un agroturismo situado al norte de Mallorca, en Pollensa, en un entorno incomparable al lado de la sierra de Tramuntana. Se encuentra a 5km del pueblo de Pollensa. Consulta nuestra disponibilidad seleccionando las fechas de tus vacaciones en el calendario.</p>
                        </section>
                        <div className="fechaYreserva">
                            <form className="formularioFechas" onSubmit={handleSubmit}>
                                <label className="selector">Selecciona fechas</label>
                                <div className="inputs">
                                    <input type="date" name="start" onChange={handleDateChange} required />
                                    <input type="date" name="end" onChange={handleDateChange} required />
                                </div>
                                <label className="selector">Selecciona tipo de habitacion</label>
                                <select className="selector" name="room">
                                    <option defaultValue value="1">Habitacion doble</option>
                                    <option value="2">Habitacion matrimonio</option>
                                    <option value="3">Dos habitaciones</option>
                                    <option value="4">Finca completa</option>
                                </select>
                                <div className="divReservar">
                                    <button name="codigo" type="submit" className="botonReserva">Reservar</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="collage"><img src="/images/foto_finca.jpg" alt="foto fachada varitx paradise" />
                    </section>
                </section>
            </div>
        </Fragment>
    );
}


export default Home;
