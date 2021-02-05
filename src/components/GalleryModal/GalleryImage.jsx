import React, { Component } from 'react';
//Componente presentacional
export default class GalleryImage extends Component {

    render() {
        return (
// Clase que devuelve tag Image 3 props:
//una clase de CSS,una para identificar la imagen y otra para la descripcion imagen.
                <img className={this.props.className} src={this.props.src} alt={this.props.alt} />

        )
    }
}
