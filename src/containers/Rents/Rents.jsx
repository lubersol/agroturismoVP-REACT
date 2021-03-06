import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Rents.scss";
import { notification } from "antd";
import { Link } from "react-router-dom";


//Mostrar reservas del usuario
const Rents = () => {
  const [rents, setRents] = useState([]);
  useEffect(() => {
    let userId = localStorage.getItem("user_id");
    console.log(userId);
    axios
      .get(`http://localhost:8000/api/rent/show/${userId}`)
      .then((res) => {
        console.log(res.data);
        setRents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Eliminar una reserva por el usuario
  const deleteRent = async (id) => {
    const resultado = await axios.delete(
      `http://localhost:8000/api/rent/cancel/${id}`
    );
    console.log(resultado);
    setRents(rents.filter((reserva) => reserva.id !== id));
    notification.success({
      message: "Reserva eliminada",
      description: "Has cancelado la reserva",
    });
  };

  return (
    <div className="divCentral">
      <header className="cajaTitulo">
        <p className="titular">Tu reserva</p>
      </header>
      <div className="botonBack">
        <Link to="/profile" className="backbutton">
          Back
        </Link>
      </div>
      <div className="reserva">
        {rents.map((rent) => (
          <div key={rent.id} className="info">
            <div className="contenido">{rent.title}</div>
            <p>Fechas</p>
            <div className="contenido">{rent.startDate}</div>
            <div className="contenido">{rent.endDate}</div>
            <div className="contenido">
              <p>Precio</p>
            </div>
            <div className="contenido">{rent.price}</div>
            <div className="contenido">
              <p>Descripción</p>
            </div>
            <div className="descripcion">{rent.description}</div>
            <div className="boxImagen">
              <img src={rent.image} className="medium" alt={rent.title} />
            </div>
            <div className="divEliminar">
              <button
                className="botonEliminar"
                onClick={() => {
                  deleteRent(rent.id);
                }}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="reservation">
        <article className="parrafo">
          <p className="textoPrincipal">Gracias por confiar en nosotros!</p>
        </article>
      </div>
    </div>
  );
};

export default Rents;
