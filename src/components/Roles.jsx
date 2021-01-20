import React from 'react';
import Profile from '../containers/Profile/Profile';
import Admin from '../containers/Admin/Admin';

function Roles(props) {

  const returnViewByRole = (props) => {
    console.log(props.user)
    if(props.user.rol === 'admin'){
      return <Admin user={props.user} setUser={props.setUser}/>
    }else{
      return <Profile user={props.user} setUser={props.setUser}/>
    }
  }
  return (
    returnViewByRole(props)
  );
}

export default Roles;
