import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import Protected from './components/Protected.jsx'
import Home from './components/home.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Protected />} />
      <Route path='home' index={true} element={<Home />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)
