import React, { Component } from 'react';
import GalleryImage from '../../components/GalleryModal/GalleryImage';
import GalleryModal from '../../components/GalleryModal/GalleryModal';

import './Gallery.scss';

//Galeria de imagenes
let imgUrls = [
    './images/casa_vistas.jpg',
    './images/fachadaLateral.jpg',
    './images/exteriorCasa.jpg',
    './images/interiorTinaja.jpg',
    './images/chimeneaExterior.jpg',
    './images/comedor.jpg',
    './images/botijos.jpg',
    './images/entrada_huerto.jpg',
    './images/mesasTerraza.jpg',
    './images/terraza.jpg',
    './images/exterior_noche_piscina.jpg',
    './images/entradaPrincipal.jpg',
    './images/exterior_dia_piscina.jpg',
    './images/porchePalmera.jpg',
    './images/molino.jpg',
    './images/decoracion_mesa.jpg',
    './images/exteriorFlores.jpg',
    './images/jardinMesas.jpg',
    './images/exteriorTrasero.jpg',
    './images/fachadaFrontal.jpg',
    './images/salon.jpg',
    './images/salon_vigas.jpg',
    './images/salonSillon.jpg',
    './images/panoramica.jpg',
    './images/habitacion_doble.jpg',
    './images/habitacion2.jpg',
    './images/habitacionDosel.jpg',
    './images/habitacionDoblePiedra.jpg',
]

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        //Para no mostrar el modal al inicio
        this.state = {
            isOpen: false,
            url: ''
        }

    }

    render() {
        return (
            // Clases de CSS: Bootstrap y nuestros estilos
            <div className='container-fluid gallery-container'>

                <div className='row'>
                    {
                        imgUrls.map((url, index) => {
                            return (
                                <div key={index} className='col-sm-6 col-md-3 col-xl-3'>
                                    <div className='gallery-card'>
                                        <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                                        <span className='card-icon-open fa fa-expand-arrows-alt' value={url} onClick={() => this.openModal(url)}></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <GalleryModal show={this.state.isOpen} onClick={this.closeModal} src={this.state.url} />

            </div>
        )
    }

    // Funcion para abrir la modal
    openModal = (url) => {

        this.setState({
            isOpen: true,
            url: url
        });
    }

    // Función para cerrar la modal
    // Se usa arrow function para evitar hacer el binding en el constructor
    closeModal = () => {

        this.setState({
            isOpen: false,
            url: ''
        });
    }
}

