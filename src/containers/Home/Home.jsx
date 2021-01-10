import React, { Component, Fragment } from "react";
import './Home.scss';

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
                        <p>ESPACIO PARA PONER EL CALENDARIO DE RESERVAS <br /><br />
                        </p>
                        <p>ESPACIO PARA PONER EL BOTON DE RESERVAS EN VERDE AGUA?</p>
                        </section>
                        <section className='collage'></section>
                    </section>
                </div>
            </Fragment>
        );
    };
}

export default Home;
