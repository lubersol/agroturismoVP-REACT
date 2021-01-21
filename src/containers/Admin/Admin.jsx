import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      await axios.post('http://localhost:8000/api/user/logout', {}, options)
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
    <div className='divCentral'>
      <div className='reserva'>
        {rents?.map(rent =>
          <div key={rent._id} className='info'>
            <div className='contenido'>{rent.startDate}</div>
            <div className='contenido'>{rent.endDate}</div>
          </div>)}
      </div>
      <div className="divEliminar">
        <button className='botonEliminar' onClick={logout}>Logout</button>
      </div>
    </div>

  )
}

export default Admin;