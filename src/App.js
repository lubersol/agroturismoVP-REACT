import React, { useState } from 'react';
import moment from 'moment';
//import 'react-dates/initialize';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'react-dates/lib/css/_datepicker.css';

//Importación de estilos
import './App.css';
import 'antd/dist/antd.css';

//Importación de componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Roles from './components/Roles';

//Importación de containers
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Gallery from './containers/Gallery/Gallery';
import Rents from './containers/Rents/Rents';
import Profile from './containers/Profile/Profile';
import Admin from './containers/Admin/Admin';


function App() {
  let initialUser = null;
  try {
    initialUser = JSON.parse(localStorage.getItem('user'));
    // localStorage.getItem('id');
    // localStorage.setItem('user_id', id);
  } catch (error) {
    console.error(error)
  }
  const [user, setUser] = useState(initialUser);
  
return (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/gallery' component={Gallery} exact />
      <Route path='/register' component={Register} exact />
      <Route path='/login' component={Login} exact>
        <Login setUser={setUser} />
        {/* <Roles user={user} setUser={setUser} /> */}
      </Route>
      <Route path='/rents' component={Rents} exact />
      <Route path='/profile' component={Profile} exact>
        <Profile setUser={setUser} />
      </Route>
      <Route path='/admin' component={Admin} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
);
}

export default App;
