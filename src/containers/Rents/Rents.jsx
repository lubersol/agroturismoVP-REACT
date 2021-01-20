import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Rents.scss';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

//Mostrar reservas del usuario
const Rents = () => {
  const [rents, setRents] = useState([]);
  const token = localStorage.getItem('authToken')
  useEffect(() => {
    const options = { headers: { Authorization: `Bearer ${token}` } };
    axios.get('http://localhost:8000/api/rent/show', options)
      .then((res) => {
        console.log(res.data)
        setRents(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  //Eliminar una reserva por el usuario
  const deleteRent = async (id) => {
    const options = { headers: { Authorization: `Bearer ${token}` } };
    await axios.delete('http://localhost:8000/rent/cancel/' + id, options)
    notification.success({ message: 'Reserva eliminada.', description: 'Has cancelado la reserva.' })
    await axios.get('http://localhost:8000/rent/show', options)
      .then((res) => {
        console.log(res.data)
        setRents(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='divCentral'>
      <div className='reserva'>
        {rents?.map(rent =>
          <div key={rent.id} className='info'>
            <div className='contenido'><span>Fechas</span></div>
            <div className='contenido'>{rent.startDate}</div>
            <div className='contenido'>{appointment.endDate}</div>
            <div className='divEliminar'><button className='botonEliminar' onClick={() => { deleteRent(rent.id) }}>X</button></div>
          </div>
        )}
      </div>
      <div className="justifybutton">
        <Link to='/profile' className='backbutton'>Back</Link>
      </div>

    </div>
  );

}


export default Rents;
