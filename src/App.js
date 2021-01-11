import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

//Importación de componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Importación de containers
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
// import Rooms from './containers/Rooms/Rooms';
import Gallery from './containers/Gallery/Gallery';

function App() {
  let initialUser = null;
  try {
    initialUser = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error(error)
  }
  const [user, setUser] = useState(initialUser);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/register' component={Register} exact /> 
        <Route path='/login' component={Login} exact>
          <Login setUser={setUser} />
        </Route>
        {/* <Route path='/rooms' component={Rooms} exact /> */}
        <Route path='/gallery' component={Gallery} exact /> 
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
