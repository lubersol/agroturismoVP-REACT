import React, { Component, Fragment } from "react";
import './Home.scss';

// import axios from 'axios';
// import { notification } from "antd";
// import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Fragment>
                <div className='home'>
                    <section className="contenedorCentral">
                        <section className="textHome"><span>Suscríbete y podrás ver una gran variedad de películas y series actuales. Puedes verlas en streaming o descargarlas! <br /><br />
                Para inscribirte sólo necesitas un correo electrónico y una contraseña y tendrás acceso a estrenos, películas  y series populares, con su correspondiente ficha detallada.</span>
                        </section>
                        <section className='collage'></section>
                    </section>
                </div>
            </Fragment>
        );
    };
}

export default Home;
