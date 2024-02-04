import React from 'react'
import { Navigate } from 'react-router-dom';

import Home from './home'
const Protected = () => {
  const token = localStorage.getItem('token');
  return(
    token ? <Home /> : <Navigate to='/login' /> 
    //<Home />
    
  )
}

export default Protected