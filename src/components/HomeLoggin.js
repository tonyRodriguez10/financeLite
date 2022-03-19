import moment from 'moment';
import React, { useState } from 'react';
import 'moment/locale/es';
import divisas from '../../src/divisas.json'
import '../css/listaDevisas.css';


import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";


var time= moment().format('LL');


function Item(props){
    return <li><a class="hoverItems">{props.name} ({props.icon}) : {props.value}</a></li>;
}



const HomeLoggIn = (props) => {
    return(
        <>
        <div className='container'>
            <div className='row borders' style={{color: "orange", fontWeight:"bold",textAlign:"center"}}>
                <h1>Tipo de cambio al dia {time}</h1>
            </div>
            <div className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify"}}>
                <div className='col-2'></div>
                <div className='col-8 font' style={{fontSize:"2rem",padding:"0% 14%"}}>
                    <ul>
                        { divisas.map(
                            //(item, i) => <li key={i}>{item.name}</li>
                            //(item) => <li key={item.id}>{item.name}</li>
                            (index) => <Item Key={index.toString()}
                            value={index.value} name={index.name} icon={index.icon}/>
                        )}
                    </ul>
                </div>
                <div className='col-2'></div>
            
            </div>
        </div>
        </>
    )

    }

export default HomeLoggIn;
