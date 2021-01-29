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
            console.log({ message: 'ERROR' })
        }
    }


    // { start: new Date() }

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
        console.log(e.target.value);
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
                // { startDate, endDate }
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
            <div className='home'>
                <section className="contenedorCentral">
                    <section className="picker">
                        <section className="reservar">
                            <p className="welcome">Welcome to Varitx Paradise!</p>
                            <p className="textoPrincipal">Varitx Paradise es un agroturismo situado al norte de Mallorca, en Pollensa, en un entorno incomparable al lado de la sierra de Tramuntana. Se encuentra a 5km del pueblo de Pollensa. Puedes consultar nuestra disponibilidad seleccionando las fechas de tus vacaciones en el calendario.</p>
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
                    <section className='collage'><img src="/images/foto_finca.jpg" alt="foto fachada varitx paradise" />
                    </section>
                </section>
            </div>
        </Fragment>
    );
}


export default Home;
// class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             startDate:null,
//             endDate: null,
//             // room_id: 1,
//             // user_id: 2,
//         }
//     }

//     componentDidMount() {
//         let entrada = localStorage.getItem('startDate');
//         this.setState({ startDate: entrada });
//         console.log(entrada);
//         let salida = localStorage.getItem('endDate');
//         this.setState({ endDate: salida })
//         console.log(salida);
//     }

//     makeRent = async () => {

//         try {
//             const userLogged = localStorage.getItem('user') || false;
//             if (userLogged) {
//                 const order = {
//                     "startDate": this.state.startDate,
//                     "endDate": this.state.endDate,
//                 }
//                 console.log(order);
//                 let reserva = await axios.post('http://localhost:8000/api/auth/rent/create', order)
//                 console.log(reserva);
//                 this.setState(reserva.data)
//                 // localStorage.setItem(reserva.data);
//                 notification.success({ message: 'Reserva creada!', description: 'Se ha creado correctamente la reserva' })
//                 this.props.history.push('/profile')

//             } else {
//                 this.props.history.push('/login')
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     handleDateChange(dates) {
//         this.setState(dates);
//         localStorage.setItem('startDate', dates.startDate);
//         localStorage.setItem('endDate', dates.endDate);
//         console.log(dates);
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className='home'>
//                     <section className="contenedorCentral">
//                         <section className="picker">
//                             <div className="fechaYreserva">
//                                 <form className="formularioFechas" onSubmit={this.makeRent}>
//                                     <label>Fecha de entrada
//                                     <input type="date" name="start" value={this.state.startDate} onChange={({ startDate }) => this.handleDateChange({ startDate })} required />
//                                     </label>
//                                     <label>Fecha de salida
//                                     <input type="date" name="end" value={this.state.endDate} onChange={({ endDate }) => this.handleDateChange({ endDate })} required />
//                                     </label>
//                                     {/* <DateRangePicker
//                                     startDate={this.state.startDate} // momentPropTypes.momentObj or null,
//                                     startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
//                                     endDate={this.state.endDate} // momentPropTypes.momentObj or null,
//                                     endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
//                                     onDatesChange={({ startDate, endDate }) => this.handleDateChange({ startDate, endDate })} // PropTypes.func.isRequired,
//                                     focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//                                     onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
//                                 displayFormat={() => "DD/MM/YYYY"}

//                                 /> */}
//                                     <div className="divReservar">
//                                         <button name="codigo" type="submit" className="botonReserva">Reservar</button>
//                                     </div>
//                                 </form>
//                             </div>
//                             {/* <input type="checkbox" value="1">Habitacion individual</input>
//                             <input type="checkbox" value="2">Habitacion doble</input> */}
//                             <section className="reservar">
//                                 <p className="welcome">Welcome to Varitx Paradise!</p>
//                                 <p className="textoPrincipal">Para solicitar una estancia en Varitx Paradise, agroturismo situado al norte de Mallorca, en Pollensa, consulta nuestra disponibilidad seleccionando las fechas de tus vacaciones en el calendario superior.</p>
//                             </section>
//                         </section>
//                         <section className='collage'><img src="/images/foto_finca.jpg" alt="foto fachada varitx paradise" />
//                         </section>
//                     </section>
//                 </div>
//             </Fragment>
//         );
//     };
// }

// export default Home;
