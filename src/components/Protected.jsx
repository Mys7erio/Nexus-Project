import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Home from './home'
const Protected = () => {
  const token = localStorage.getItem('token');
  return(
    token ? <Home /> : <Navigate to='/login' /> 
    //<Home />
    
  )
}

export default Protected