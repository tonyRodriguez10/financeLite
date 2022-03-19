import React, { useState } from "react";
import { Link, Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Calculo from "./Calculo";
import HomeLoggin from "./HomeLoggin";
import HomeLoggout from "./HomeLoggout";
import { ListaDivisas } from "./ListaDivisas";
import StartSesion from "./StartSesion";


const HeaderNotLogged = () => {
  return (
    
      <Routes>
        <Route element={<Layout />}>

          <Route index path='/' element={<HomeLoggout />} />
        
          <Route path='/startSesion' element={<StartSesion />} />

          <Route path='/aboutUs' element={<AboutUs />} />
     
          {/* <Route path="*" element={<NoEncontrada />} /> */}
        </Route>
      </Routes>
   
  );
}

export default HeaderNotLogged;

const Layout = () =>{
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="./logofinancelite.png" alt="Finance | Lite" height="80" width="200"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/aboutUs'>AboutUs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/startSesion'>LogIn</NavLink>
            </li>

          </ul>
        </div>
        </div>
      </nav> */}

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
        <a class="nav-link active" aria-current="page" href="#"> <NavLink to='/aboutUs'>Acerca de</NavLink></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"> <NavLink to='/startSesion'>Iniciar Sesion</NavLink></a>
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

