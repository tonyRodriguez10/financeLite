import React, { useState } from 'react';
import divisas from '../../src/divisas.json'
import '../css/listaDevisas.css';

function Item(props){
    return <li><a class="hoverItems">{props.name} ({props.icon}) : {props.value}</a></li>;
}

export const ListaDivisas = () => {
    return (
        <>
      <span style={{color: "red", textDecoration:"underline", fontWeight:"bold"}}>Valor del colón en otras divisas globales</span> 
      <ul>
          { divisas.map(
              //(item, i) => <li key={i}>{item.name}</li>
              //(item) => <li key={item.id}>{item.name}</li>
              (index) => <Item Key={index.toString()}
              value={index.value} name={index.name} icon={index.icon}/>
          )}
      </ul>
      </>
      )
  };
