import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Rents.scss';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

//Mostrar reservas del usuario
const Rents = () => {
  const [rents, setRents] = useState([]);
  useEffect(() => {
    let userId = localStorage.getItem('user_id')
    axios.get(`http://localhost:8000/api/auth/rent/show/${userId}`)
      .then((res) => {
        console.log(res.data)
        setRents(res.data);
      }).catch((error) => {
        console.log(error);
      })
     } , [])

    //       setRents(result.data.rent);
    //       console.log(result)
    // }

    //   getRents();
    // }, [])
    // const token = localStorage.getItem('authToken')
    // useEffect(() => {
    //   let userId = localStorage.getItem('user_id');
    //   // const options = { headers: { Authorization: `Bearer ${token}` } };
    //   axios.get(`http://localhost:8000/api/auth/rent/show/${userId}`)
    //     .then(res => {
    //       setRents(res.data)
    //       // .then((res) => {
    //       console.log(res.data)
    //       // setRents(res.data);
    //     }).catch((error) => {
    //       console.log(error);
    //     })
    // }, [])

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
        <div className='reserva'>
          {rents?.map(rent =>
            <div key={rent._id} className='info'>
              <div className='contenido'><span>Fechas</span></div>
              <div className="contenido">
                <p>Habitación</p></div>
              <input type="checkbox" id="1" value="1">1</input>
              <input type="checkbox" id="2" value="1">2</input>
              <input type="checkbox" id="3" value="1">3</input>
              <input type="checkbox" id="4" value="1">4</input>
              <input type="checkbox" id="5" value="1">5</input>
              <div className='contenido'>{rent.startDate}</div>
              <div className='contenido'>{rent.endDate}</div>
              {/* <div className='divEliminar'><button className='botonEliminar' onClick={() => { deleteRent(rent.id) }}>X</button></div> */}
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
