import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from "./components/Header";
import HeaderNotLogged from "./components/HeaderNotLogged";
import Footer from "./components/Footer";
import HomeLoggin from "./components/HomeLoggin";
import HomeLoggout from "./components/HomeLoggout";
import axios from 'axios'
import address from './components/StartSesion';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

function Greeting() {
  


  if(sessionStorage.getItem('logged')=="SI"){


    return <Header />

  }
  else{

  return <HeaderNotLogged />

  }

}

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;

//   if (isLoggedIn) {

//     return <Header />
//   }
//   else{

//   return <HeaderNotLogged />
//   }
// }

// function IniciarSesion(){
//   const url = "http://localhost:36406/api/Usuarios/" + 1 ;
//   var logged;

//   axios({
//     method: 'GET',
//       withCredentials: false,
//     url: url,
// })

// .then((resp) => {
  
//   logged=true;
// }, (error) => {
//   logged=false;
// });

// }//final de funcion

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <Greeting  />
    </Router>
    <div style={{marginTop:"15%"}}>
    <Footer />
    </div>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
