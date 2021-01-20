import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import './Home.scss';
//import '../../components/Rents/Rents';
// import '../../components/DatePicker/DatePicker';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    };

    //     async makeRent() {
    //         const token= localStorage.getItem('authToken')
    //         const options = {
    //           headers: {Authorization: `Bearer ${token}`}
    //         }

    //     await axios.post('http://localhost:8000/rent/create', this.state, options)
    //     .then(res=> {
    //         console.log(res.data)
    //         notification.success({message: 'Reserva solicitada', description: 'Ha solicitado una reserva'})

    //         setTimeout(() => {
    //           history.push("/profile")
    //       }, 1500);
    //       }).catch(error => {
    //         console.log(error)
    //         notification.error({message: 'Error al reservar', description:'Se ha producido un error al hacer la solicitud de reserva'})
    //       })
    //   }

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
                                <p className="titulo">Para solicitar una estancia en Varitx Paradise, agroturismo situado al norte de Mallorca, en Pollensa, consulta nuestra disponibilidad seleccionando las fechas de tus vacaciones en el calendario</p>
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
