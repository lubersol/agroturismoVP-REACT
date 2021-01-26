import React, { Component, Fragment } from "react";
//import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import './Home.scss';
import axios from 'axios';
import { notification } from 'antd';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null, 
            room_id: 1,
            user_id: 2,
        }
    }

    componentDidMount() {
        let entrada = JSON.parse(localStorage.getItem('startDate'));
        this.setState({ startDate: entrada })
        let salida = JSON.parse(localStorage.getItem('endDate'));
        this.setState({ endDate: salida })
        console.log(entrada);
        // this.makeRent();
    }

    makeRent = async () => {
        try {
            const order = {
                "startDate": this.state.startDate,
                "endDate": this.state.endDate,
            }
            console.log(order);
            let reserva = await axios.post('http://localhost:8000/api/auth/rent/create', order)
            console.log(reserva);
            this.setState(reserva.data)
            localStorage.setItem(reserva.data);
            notification.success({ message: 'Reserva creada!', description: 'Se ha creado correctamente la reserva' })
            this.history.push('/rents')

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Fragment>
                <div className='home'>
                    <section className="contenedorCentral">
                        <section className="picker">
                            <div className="fechaYreserva">
                                <DateRangePicker
                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                />
                                <div className="divReservar">
                                    <button name="codigo" className="botonReserva" onClick={() => this.makeRent()}>Reservar</button>
                                </div>
                            </div>
                            {/* <input type="checkbox" value="1">Habitacion individual</input> */}
                            {/* <input type="checkbox" value="2">Habitacion doble</input> */}
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
    };
}

export default Home;
