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
            endDate: null
        }
    };
    // componentDidMount() {
    //     const entrada = JSON.parse(localStorage.getItem('entrada'))
    //     const salida = JSON.parse(localStorage.getItem('salida'))
    //     this.setState({ startDate: data, endDate: data })
    //     console.log(data)
    // }

    async makeRent() {
        const entrada = JSON.parse(localStorage.getItem('startDate'))
        const salida = JSON.parse(localStorage.getItem('endDate'))
        this.setState({ startDate: entrada, endDate: salida })
        // console.log(entrada+salida);
        const URL = 'http://localhost:8000/api/auth/rent/create';
        const rent = {
            "startDate":this.entrada.startDate,
            "endDate":this.salida.endDate,
            // "room_id":data.room_id,
            // "user_id":data.user_id,
        }
        await axios.post(URL, rent)
        console.log(rent)
        notification['success']({
            message: "Reserva añadida!"
        })
        this.history.push('/rents')

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
                                        <button type="submit" className="botonReserva" onClick={() => this.makeRent()}>Reservar</button>
                                    </div>
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
        };
    }

    export default Home;
