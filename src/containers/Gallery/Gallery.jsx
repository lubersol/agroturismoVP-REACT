import React, { Component } from 'react';
import GalleryImage from '../../components/GalleryModal/GalleryImage';
import GalleryModal from '../../components/GalleryModal/GalleryModal';

import './Gallery.scss';

//Galeria de imagenes
let imgUrls = [
    // './src/images/botijos.jpg',
    // './src/images/casa_vistas.jpg'
    'https://source.unsplash.com/gThfDnqgfMw/800x600',
    'https://source.unsplash.com/_1x_x8Vtg2w/800x600',
    'https://source.unsplash.com/TFP_s4_jRuE/800x600',
    'https://source.unsplash.com/pElM4yerF5Q/800x600',
    'https://source.unsplash.com/sFsy8CKyQ5c/800x600',
    'https://source.unsplash.com/0WGucY1VHI0/800x600',
    'https://source.unsplash.com/1ciHU-qPifY/800x600',
    'https://source.unsplash.com/JZCJotPa96c/800x600',
    'https://source.unsplash.com/8X19catOuNI/800x600',
    'https://source.unsplash.com/_GDff35-Pa8/800x600',
    'https://source.unsplash.com/XYok1nBGvhk/800x600'
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

