import React, { Component } from 'react';
import '../containers/Gallery/Gallery.scss';


export default class GalleryModal extends Component {
    render() {
        //condicional para mostrar u ocultar el modal
        if (this.props.show === false) {
            return null;
        }

        return (
            //div con 3 props:
            //gestionar estado modal, gestionar evento y asignar nombre
            <div show={this.props.isOpen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
                {/* clase CSS para estilos body modal abierto */}
                <div className='modal-body'>

                    <a className='modal-close' href='#url' onClick={this.props.onClick}>
                        <span className='fa fa-times'></span>
                    </a>

                    <img src={this.props.src} alt='' />

                </div>

            </div>
        )
    }
}
