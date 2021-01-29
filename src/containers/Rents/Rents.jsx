import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Rents.scss';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

//Mostrar reservas del usuario
const Rents = () => {
  const [rents, setRents] = useState([]);
  useEffect(() => {
    let userId = localStorage.getItem('user_id');
    console.log(userId);
    axios.get(`http://localhost:8000/api/auth/rent/show/${userId}`)
      .then((res) => {
        console.log(res.data)
        setRents(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }, [])


  //Eliminar una reserva por el usuario
  // const deleteRent = async (id) => {
  //   const options = { headers: { Authorization: `Bearer ${token}` } };
  //   await axios.delete('http://localhost:8000/api/auth/rent/cancel/' + id, options)
  //   notification.success({ message: 'Reserva eliminada.', description: 'Has cancelado la reserva.' })
  //   await axios.get('http://localhost:8000/api/auth/rent/show', options)
  //     .then((res) => {
  //       console.log(res.data)
  //       setRents(res.data);
  //     }).catch((error) => {
  //       console.log(error);
  //     })
  // }

  return (
    <div className='divCentral'>
      <header className="cajaTitulo">
        <p className="titular">Tu reserva</p>
      </header>
      <div className="botonBack">
        <Link to='/profile' className='backbutton'>Back</Link>
      </div>
      <div className="reservation">
        <article className="parrafo">
          <p className="textoPrincipal">Gracias por confiar en nosotros!</p>
        </article>
        <article className="parrafo">
        <p className="textoPrincipal">Estos son los datos de tu reserva:</p>
        </article>
      </div>
      <div className='reserva'>
        {rents.map(rent => (
          <div key={rent._id} className='info'>
            <div className="contenido">
              <p>Habitación</p></div>
            <div className="contenido">{rent.room_id}</div>
            <p>Fechas</p>
            <div className='contenido'>{rent.startDate}</div>
            <div className='contenido'>{rent.endDate}</div>
            {/* <div className='divEliminar'><button className='botonEliminar' onClick={() => { deleteRent(rent.id) }}>X</button></div> */}
          </div>
        ))
        }
      </div>
    </div>
  );

}


export default Rents;
