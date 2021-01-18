import React, { useHistory } from 'react';
import './Login.scss';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = ({ setUser }) => {

    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault(); // para que no se recargue la pagina
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        console.log(user);
        axios.post('https://127.0.0.1:8000/api/login', user)
        .then(res=>{
        console.log("axios hecho")
        localStorage.setItem('authToken', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));
        setUser(res.data);

        notification.success({ message: 'Login correcto!', description: 'Bienvenido a Varitx Paradise!' })

        setTimeout(() => {
            history.push('/profile')
        }, 1000);
    })
    .catch (error=> { throw (error) })
}
// notification.error({ message: 'Error', description: 'Ha habido un problema en el login' })

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
