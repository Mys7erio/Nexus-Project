import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
const home = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }
  return (
    <div>
        <h1>Logged in successfully</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default home