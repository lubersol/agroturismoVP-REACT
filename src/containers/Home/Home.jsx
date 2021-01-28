import React, { useEffect, useState, Fragment } from "react";
//import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import axios from 'axios';
//import { DatePicker } from "antd";

const Home = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
        // e.preventDefault();
        setStartDate(e.target.value);
        console.log(e.target.value);
        setEndDate(e.target.value);
        localStorage.setItem('startDate', startDate);
        localStorage.setItem('endDate', endDate);
    }

    const handleSubmit = async () => {
        try {
            // const order = {
            //     startDate: startDate,
            //     endDate: endDate,
            // }
            // console.log(order);
            let reserva = await axios.post('http://localhost:8000/api/auth/rent/create', { startDate, endDate })
            localStorage.setItem(reserva.data);
             console.log(reserva);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Fragment>
            <div className='home'>
                <section className="contenedorCentral">
                    <section className="picker">
                        <div className="fechaYreserva">
                            <form className="formularioFechas" onSubmit={handleSubmit}>
                                <input type="date" name="start" onChange={handleDateChange} required />
                                <input type="date" name="end" onChange={handleDateChange} required />

                                {/* <DatePicker
                                    selected={startDate}
                                    name="start"
                                    dateFormat="MMMM d, yyyy"
                                    onChange={value => handleDateChange({ target: { name: "start", value } })} required />
                                <DatePicker
                                    selected={endDate}
                                    name="end"
                                    dateFormat="MMMM d, yyyy"
                                    onChange={value => handleDateChange({ target: { name: "end", value } })} required /> */}
                                <div className="divReservar">
                                    <button name="codigo" type="submit" className="botonReserva">Reservar</button>
                                </div>
                            </form>
                        </div>
                        <section className="reservar">
                            <p className="welcome">Welcome to Varitx Paradise!</p>
                            <p className="textoPrincipal">Para solicitar una estancia en Varitx Paradise, agroturismo situado al norte de Mallorca, en Pollensa, consulta nuestra disponibilidad seleccionando las fechas de tus vacaciones en el calendario superior.</p>
                        </section>
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
