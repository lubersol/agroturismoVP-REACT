import React from 'react';
import './Login.scss';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = ({ setUser }) => {

    const history = useHistory();
    // const getEmail = async () => {
    //     try {
    //         let email = localStorage.getItem('email');
    //         const res = await axios.get(`http://localhost:8000/api/auth/user/email/${email}`);
    //         console.log(res);
    //         localStorage.setItem('user_id', res.data[0].id);
    //     } catch (error) {
    //         console.log({ message: 'ERROR' })
    //     }
    // }
    const handleSubmit = event => {
        event.preventDefault(); // para que no se recargue la pagina
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        console.log(user);
        axios.post('http://localhost:8000/api/auth/login', user)
            .then(res => {
                console.log("axios hecho")
                localStorage.setItem('authToken', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data));
                setUser(res.data.user);
                // getEmail();

                notification.success({ message: 'Login correcto!', description: 'Bienvenido a Varitx Paradise!' })
                setTimeout(() => {
                    history.push('/rents')
                }, 1000);
            })
            .catch(error => { throw (error) })
    }

    return (
        <div className="containerForm">
            <form className="formulario" onSubmit={handleSubmit}>
                <header className="cajaTitulo">
                    <p className="titular">Area cliente</p>
                </header>
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

export default Login;
