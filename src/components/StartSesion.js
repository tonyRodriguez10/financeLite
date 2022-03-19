import React, { useState } from 'react';
import '../css/homeLoggin.css';
import { Link, Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import HeaderNotLogged from './HeaderNotLogged';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StartSesion = () => {
    const notify = () => toast("Wow so easy!");
    var logged;

    const [id, setID] = useState('');
    const [usuario, setUser] = useState('');
    const [contrasena, setPassword] = useState('');
    const cookies = new Cookies();

    function removerCookies(){
        sessionStorage.removeItem('nombreGasto1')
        sessionStorage.removeItem('nombreGasto2')
        sessionStorage.removeItem('nombreGasto3')
        sessionStorage.removeItem('nombreGasto4')
        sessionStorage.removeItem('nombreGasto5')

        sessionStorage.removeItem('inputGasto1')
        sessionStorage.removeItem('inputGasto2')
        sessionStorage.removeItem('inputGasto3')
        sessionStorage.removeItem('inputGasto4')
        sessionStorage.removeItem('inputGasto5')

        sessionStorage.removeItem('nombreVenta1')
        sessionStorage.removeItem('nombreVenta2')
        sessionStorage.removeItem('nombreVenta3')
        sessionStorage.removeItem('nombreVenta4')
        sessionStorage.removeItem('nombreVenta5')

        sessionStorage.removeItem('inputVenta1')
        sessionStorage.removeItem('inputVenta2')
        sessionStorage.removeItem('inputVenta3')
        sessionStorage.removeItem('inputVenta4')
        sessionStorage.removeItem('inputVenta5')

        sessionStorage.removeItem('btnImprimir');
    }
    

    function IniciarSesion() {
        removerCookies();
        const url = "http://localhost:36406/api/Usuarios/" + usuario+","+contrasena;
      
        axios({
          method: 'GET',
            withCredentials: false,
          url: url,
      })
      .then((resp) => {
        
        if(resp.data==""){
            toast.error(' Upps algo salió mal! ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
            toast.info(' Logueado correctamente! ', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

            setTimeout(() => {
                
            window.location.href = "http://localhost:3000/";
            sessionStorage.setItem('logged', 'SI');
              }, 4000);

            
            
        }
       
        //cookies.set('logged', 'si');

    
    }, (error) => {

        toast.error(' Usuario o contraseña incorrectos! ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    });

}


    return(
        <div className='container'>
           
            <div className='rectangle'>
                <h3 style={{textAlign:"center",marginTop:"3%", color:"orange", fontWeight:"bold"}}>Iniciar Sesion</h3>
                    <div className='square'>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Usuario</label>
                            <input type="text" className="form-control inputs" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUser(e.target.value)} />
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control inputs" id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{marginLeft:"1%", backgroundColor:"orange"}}/>
                            <label className="form-check-label" for="exampleCheck1" style={{marginLeft:"-70%"}}>Recordar Contraseña</label>
                        </div>
                        <button type="button" className='btn' style={{marginTop:"10%",width:"200px", backgroundColor:"orange"}} onClick={() => IniciarSesion()}>Iniciar Sesion</button>
                    </form>
                    </div>
            </div>
            <ToastContainer />
        </div>
    )

    }

export default StartSesion;
