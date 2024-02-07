import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Login from "./pages/Login.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
