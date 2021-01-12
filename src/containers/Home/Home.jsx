import React, { Component, Fragment } from "react";
import './Home.scss';
import '../../components/RangePicker/RangePicker';

class Home extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Fragment>
                <div className='home'>
                    <section className="contenedorCentral">
                        <section className="textHome">
                            <RangePicker />
                        </section>
                        <section className='collage'></section>
                    </section>
                </div>
            </Fragment>
        );
    };
}

export default Home;
