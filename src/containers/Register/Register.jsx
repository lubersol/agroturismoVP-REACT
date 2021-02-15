import React from 'react';
import { useHistory } from "react-router";
import { notification } from 'antd';
import axios from 'axios';


const Register = () => {

    const history = useHistory();
    const handleSubmit = async event => {
        console.log("registrado");
        try {
            event.preventDefault();
            const body = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value
            };
            console.log(body);
            await axios.post('http://localhost:8000/api/user/register', body)
            notification.success({ message: 'Registrado!', description: 'Bienvenido! Te has registrado correctamente' })
            history.push('/login')
        } catch (error) {
            console.log(error);
            notification.error({ message: 'Error', description: 'Se ha producido un error a la hora de registrarte' })
        }
    }

    return (
        <div className="containerForm">
            <form className="formulario" onSubmit={handleSubmit}>
                <section className="cajaTitulo">
                    <p className="titular">Registrarme</p>
                </section>
                <div className="campo">
                    <input className="datos" type="text" name="name" placeholder="Introduce tu nombre" required />
                </div>
                <div className="campo">
                    <input className="datos" type="email" name="email" placeholder="Introduce tu email" required />
                </div>
                <div className="campo">
                    <input className="datos" type="password" name="password" placeholder="Introduce una contraseña" required />
                </div>
                <div className="campo">
                    <button type="submit" className="enviar">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
