import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment';
import 'moment/locale/es';
const Report= React.forwardRef((props, ref) => {
   


    const marginTop="10px"
    const marginRight="5px"
    const marginBottom="10px"
    const marginLeft="5px"
    const getPageMargins = () => {
      return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
    };




    const componentRef = useRef();
   

    var totalGasto=0;
    var totalIngreso=0;


    if( (sessionStorage.getItem('inputGasto1')!="") && (sessionStorage.getItem('inputGasto1')!=undefined) && (sessionStorage.getItem('inputGasto1')!= null)){
        totalGasto+=parseInt(sessionStorage.getItem('inputGasto1'))
        var gasto1 = 
                <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreGasto1')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputGasto1')}</label>
                </div>
    }
    else{
        var gasto1 = <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                       
                     </div>        
    }

    if( (sessionStorage.getItem('inputGasto2')!="") && (sessionStorage.getItem('inputGasto2')!=undefined) && (sessionStorage.getItem('inputGasto2')!= null)){
        totalGasto+=parseInt(sessionStorage.getItem('inputGasto2'))
        var gasto2 = 
                <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreGasto2')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputGasto2')}</label>
                </div>
    } 
    else{
        var gasto2 = <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                       
                     </div>        
    }

    if( (sessionStorage.getItem('inputGasto3')!="") && (sessionStorage.getItem('inputGasto3')!=undefined) && (sessionStorage.getItem('inputGasto3')!= null)){
        totalGasto+=parseInt(sessionStorage.getItem('inputGasto3'))
        var gasto3 = 
                <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreGasto3')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputGasto3')}</label>
                </div>
    } 
    else{
        var gasto3 = <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                       
                     </div> 
    }

    if( (sessionStorage.getItem('inputGasto4')!="") && (sessionStorage.getItem('inputGasto4')!=undefined) && (sessionStorage.getItem('inputGasto4')!= null)){
        totalGasto+=parseInt(sessionStorage.getItem('inputGasto4'))

        var gasto4 = 
                <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreGasto4')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputGasto4')}</label>
                </div>
    } 
    else{
        var gasto4 = <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                       
                     </div>       
    }

    if( (sessionStorage.getItem('inputGasto5')!="") && (sessionStorage.getItem('inputGasto5')!=undefined) && (sessionStorage.getItem('inputGasto5')!= null)){
        totalGasto+=parseInt(sessionStorage.getItem('inputGasto5'))

        var gasto5 = 
                <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreGasto5')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputGasto5')}</label>
                </div>
    } 
    else{
        var gasto5 = <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                       
                     </div>       
    }

    if( (sessionStorage.getItem('inputVenta1')!="") && (sessionStorage.getItem('inputVenta1')!=undefined) && (sessionStorage.getItem('inputVenta1')!= null)){
        totalIngreso+=parseInt(sessionStorage.getItem('inputVenta1'))

        var venta1 = 
                <div id="venta1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreVenta1')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputVenta1')}</label>
                </div>
    } 
    else{
        var venta1 = ""        
    }

    if( (sessionStorage.getItem('inputVenta2')!="") && (sessionStorage.getItem('inputVenta2')!=undefined) && (sessionStorage.getItem('inputVenta2')!= null)){
        totalIngreso+=parseInt(sessionStorage.getItem('inputVenta2'))

        var venta2 = 
                <div id="venta2" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreVenta2')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputVenta2')}</label>
                </div>
    } 
    else{
        var venta2 = ""        
    }

    if( (sessionStorage.getItem('inputVenta3')!="") && (sessionStorage.getItem('inputVenta3')!=undefined) && (sessionStorage.getItem('inputVenta3')!= null)){
        totalIngreso+=parseInt(sessionStorage.getItem('inputVenta3'))

        var venta3 = 
                <div id="venta3" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreVenta3')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputVenta3')}</label>
                </div>
    } 
    else{
        var venta3 = ""        
    }

    if( (sessionStorage.getItem('inputVenta4')!="") && (sessionStorage.getItem('inputVenta4')!=undefined) && (sessionStorage.getItem('inputVenta4')!= null)){
        totalIngreso+=parseInt(sessionStorage.getItem('inputVenta4'))

        var venta4 = 
                <div id="venta4" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreVenta4')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputVenta4')}</label>
                </div>
    } 
    else{
        var venta4 = ""        
    }

    if( (sessionStorage.getItem('inputVenta5')!="") && (sessionStorage.getItem('inputVenta5')!=undefined) && (sessionStorage.getItem('inputVenta5')!= null)){
        totalIngreso+=parseInt(sessionStorage.getItem('inputVenta5'))

        var venta5 = 
                <div id="venta5" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('nombreVenta5')}</label>
                    <label style={{width:"50%"}}>{sessionStorage.getItem('inputVenta5')}</label>
                </div>
    } 
    else{
        var venta5 = ""        
    }

    var ganancia=parseInt(totalIngreso-totalGasto)

    var time= moment().format('L');
    

    return(
        <>
        <style>{getPageMargins()}</style>
            <div style={{width:"30%",marginLeft:"40%"}} ref={ref}>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
                    <span style={{width:"60%",textAlign:"center"}}>Encabezado</span>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>Fecha y hora: </label>
                    <span style={{width:"50%"}}>{time}</span>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>Usuario: </label>
                    <span style={{width:"50%"}}>Prueba</span>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
                    <span style={{width:"60%",textAlign:"center"}}>FinanceLite</span>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "center", display:"flex"}}>
                    <label>Detalle de impresion </label>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
                    <span style={{width:"60%",textAlign:"center"}}>Mis Gastos</span>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
            </div>
            {gasto1}
            {gasto2}
            {gasto3}
            {gasto4}
            {gasto5}
            <div id="gasto1" className='row' style={{color: "red", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>Total:  </label>
                    <label style={{width:"50%"}}>{totalGasto} </label>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
                    <span style={{width:"60%",textAlign:"center"}}>Mis Ventas</span>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
            </div>
            {venta1}
            {venta2}
            {venta3}
            {venta4}
            {venta5}
            <div id="gasto1" className='row' style={{color: "red", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>Total: </label>
                    <label style={{width:"50%"}}>{totalIngreso} </label>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
                    <span style={{width:"60%",textAlign:"center"}}>Calculo final</span>
                    <div className='separador' style={{width:"20%",marginTop:"1%"}}></div>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"45%", textAlign:"center"}}>{totalIngreso} </label>
                    <label style={{width:"10%", textAlign:"center"}}>-</label>
                    <label style={{width:"45%", textAlign:"center"}}>{totalGasto}</label>
            </div>
            <div id="gasto1" className='row' style={{color: "red", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <label style={{width:"50%"}}>Ganancia: </label>
                    <label style={{width:"50%"}}>{ganancia}</label>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "justify", display:"flex"}}>
                    <div className='separador' style={{width:"100%",marginTop:"1%"}}></div>
            </div>
            <div id="gasto1" className='row' style={{color: "black", fontWeight:"bold",textAlign: "center", display:"flex"}}>
                    <label>GRACIAS por usar financelite</label>
            </div>
            </div>
        </>
    )

});

export default Report;