import React, { useState } from "react";
import { Provider } from "react-redux";
import { Link, Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import store from "./redux/store"


const Inicio = () => <h1>Este es el home</h1>
const Saludos = () => <h1>Hola a todos</h1>
const Productos = () => <h1>Productos</h1>
const NoEncontrada = () => {

  let direccion = useLocation()

  return (
  <h2>
    La dirección {direccion.pathname} no existe
  </h2>
  )
}

const App = () => {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Inicio />} />
        
        
          <Route path='/saludos' element={<Saludos />} />
          
       
          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
      
  );
}

export default App;

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/usuarios'>Usuarios</NavLink>
          </li>
          <li>
            <NavLink to='/saludos'>Saludos</NavLink>
          </li>
          <li>
            <NavLink to='/productos'>Productos</NavLink>
          </li>
          <li>
          
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  )
}
