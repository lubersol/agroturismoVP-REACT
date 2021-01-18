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

    render() {
        return (
            <Fragment>
                <div className='home'>
                    <section className="contenedorCentral">
                        <section className="picker">
                            <DateRangePicker
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            />
                            <section className="reservar">
                                <span className="titulo">Consulta la disponibilidad para reservar ahora</span>
                            </section>
                        </section>
                        <section className='collage'><img src="/images/foto_finca.jpg" />

</section>
                    </section>
                </div>
            </Fragment>
        );
    };
}

export default Home;
