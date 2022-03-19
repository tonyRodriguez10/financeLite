import React, { useState } from "react";
import { Link, Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Calculo from "./Calculo";
import HomeLoggin from "./HomeLoggin";
import HomeLoggout from "./HomeLoggout";
import { ListaDivisas } from "./ListaDivisas";
import StartSesion from "./StartSesion";
import '../css/header.css';



function cerrarSesion(){
  sessionStorage.setItem('logged', 'N');
  window.location.href = "http://localhost:3000/";
}


const Header = () => {
  return (
    
      <Routes>
        <Route element={<Layout />}>

          <Route index path='/' element={<HomeLoggin />} />
        
          <Route path='/calculos' element={<Calculo />} />

          <Route path='/aboutUs' element={<AboutUs />} />

          <Route path='/startSesion' element={<StartSesion />} />

       

       
          {/* <Route path="*" element={<NoEncontrada />} /> */}
        </Route>
      </Routes>
   
  );
}

export default Header;

const Layout = () =>{
  return (
    <> 
<nav class="navbar navbar-expand-lg navbar-light bg-dark" >
  <div class="container-fluid">
  <a className="navbar-brand" href="#"><img src="./logofinancelite.png" alt="Finance | Lite" height="80" width="200"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> <NavLink to='/'>Inicio</NavLink></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"> <NavLink to='/calculos'>Realizar mi calculo</NavLink></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"> <NavLink to='/aboutUs'>Acerca de</NavLink></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"  onClick={() => cerrarSesion()}><NavLink to='/'>Cerrar Sesion</NavLink></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
      <hr />
      <Outlet />
    </>
  )
}

