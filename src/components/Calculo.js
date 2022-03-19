import React, { useState, useRef, useEffect} from 'react';
import '../css/calculo.css';
import 'moment/locale/es';
import axios from 'axios';
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import Report from './Report';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculo = () => {
    const notify = () => toast("Wow so easy!");
    const[totalGasto, setTotalGasto]=useState(0);
    const[totalVenta, setTotalVenta]=useState(0);
    const[diferencia, setDiferencia]=useState(0);
    const[gastos, setGastos]=useState([]);
    

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

    const componentRef = useRef();


   function sumarGastos(){

        if(document.getElementById("gasto1").style.display=="none"){
            document.getElementById("gasto1").style.display="flex"
        }
        else if(document.getElementById("gasto2").style.display=="none"){
            document.getElementById("gasto2").style.display="flex"
        }
        else if(document.getElementById("gasto3").style.display=="none"){
            document.getElementById("gasto3").style.display="flex"
        }
        else if(document.getElementById("gasto4").style.display=="none"){
            document.getElementById("gasto4").style.display="flex"
        }
        else if(document.getElementById("gasto5").style.display=="none"){
            document.getElementById("gasto5").style.display="flex"
        }
        else if(document.getElementById("gasto5").style.display=="flex"){
            alert('no se pueden agregar mas')
        }
            
    }

    function restarGastos(){

        if(document.getElementById("gasto5").style.display=="flex"){
            document.getElementById("gasto5").style.display="none"
        }
        else if(document.getElementById("gasto4").style.display=="flex"){
            document.getElementById("gasto4").style.display="none"
        }
        else if(document.getElementById("gasto3").style.display=="flex"){
            document.getElementById("gasto3").style.display="none"
        }
        else if(document.getElementById("gasto2").style.display=="flex"){
            document.getElementById("gasto2").style.display="none"
        }
        else if(document.getElementById("gasto1").style.display=="flex"){
            document.getElementById("gasto1").style.display="none"
        } 
        else if(document.getElementById("gasto1").style.display=="none"){
            alert('se alcanzó el minimo de gastos')
        } 
    }

    
   function sumarIngreso(){

    if(document.getElementById("venta1").style.display=="none"){
        document.getElementById("venta1").style.display="flex"
    }
    else if(document.getElementById("venta2").style.display=="none"){
        document.getElementById("venta2").style.display="flex"
    }
    else if(document.getElementById("venta3").style.display=="none"){
        document.getElementById("venta3").style.display="flex"
    }
    else if(document.getElementById("venta4").style.display=="none"){
        document.getElementById("venta4").style.display="flex"
    }
    else if(document.getElementById("venta5").style.display=="none"){
        document.getElementById("venta5").style.display="flex"
    }
    else if(document.getElementById("venta5").style.display=="flex"){
        alert('no se pueden agregar mas')
    }
        
    }  

    function restarIngreso(){

        if(document.getElementById("venta5").style.display=="flex"){
            document.getElementById("venta5").style.display="none"
        }
        else if(document.getElementById("venta4").style.display=="flex"){
            document.getElementById("venta4").style.display="none"
        }
        else if(document.getElementById("venta3").style.display=="flex"){
            document.getElementById("venta3").style.display="none"
        }
        else if(document.getElementById("venta2").style.display=="flex"){
            document.getElementById("venta2").style.display="none"
        }
        else if(document.getElementById("venta1").style.display=="flex"){
            document.getElementById("venta1").style.display="none"
        } 
        else if(document.getElementById("venta1").style.display=="none"){
            alert('se alcanzó el minimo de gastos')
        } 
    }

    function generarReporte(){
    contarGastos();
    contarIngresos();

    if((totalGasto!=0) && (totalVenta!=0) ){
        setDiferencia(totalVenta-totalGasto);
    }

    if(diferencia!=0 ){
            
            axios.post('http://localhost:36406/api/Calculos', {
                totalGasto: totalGasto,
                totalIngreso: totalVenta,
                ganancialTotal:diferencia,
                idUsuario:1,
                fecha:moment().format()
            })
            .then(function (response) {
                alert('exitoso')
            })
            .catch(function (error) {
                alert('no exitoso')
            });
    }
    else{
        alert('no se pueden ceros')
    }

    }//fin de funcion

    function contarGastos(){
    let monto=0;

    if(document.getElementById("inputGasto1").value!=""){
        monto=monto+parseInt(document.getElementById("inputGasto1").value)
    }
    if(document.getElementById("inputGasto2").value!=""){
        monto=monto+parseInt(document.getElementById("inputGasto2").value)
    }
    if(document.getElementById("inputGasto3").value!=""){
        monto=monto+parseInt(document.getElementById("inputGasto3").value)
    }
    if(document.getElementById("inputGasto4").value!=""){
        monto=monto+parseInt(document.getElementById("inputGasto4").value)
    }
    if(document.getElementById("inputGasto5").value!=""){
        monto=monto+parseInt(document.getElementById("inputGasto5").value)
    }

    if(monto!=0){
        setTotalGasto(monto);
    }
    }

    function contarIngresos(){
    let monto=0;

    if(document.getElementById("inputVenta1").value!=""){
        monto=monto+parseInt(document.getElementById("inputVenta1").value)
    }
    if(document.getElementById("inputVenta2").value!=""){
        monto=monto+parseInt(document.getElementById("inputVenta2").value)
    }
    if(document.getElementById("inputVenta3").value!=""){
        monto=monto+parseInt(document.getElementById("inputVenta3").value)
    }
    if(document.getElementById("inputVenta4").value!=""){
        monto=monto+parseInt(document.getElementById("inputVenta4").value)
    }
    if(document.getElementById("inputVenta5").value!=""){
        monto=monto+parseInt(document.getElementById("inputVenta5").value)
    }

    if(monto!=0){
        setTotalVenta(monto);
    }
    }

    function EnviarProps(){
  
        if(document.getElementById("inputGasto1").value!=""){
                sessionStorage.setItem('nombreGasto1', document.getElementById("nombreGasto1").value);
                sessionStorage.setItem('inputGasto1', document.getElementById("inputGasto1").value);
        }
        if(document.getElementById("inputGasto2").value!=""){
            sessionStorage.setItem('nombreGasto2', document.getElementById("nombreGasto2").value);
            sessionStorage.setItem('inputGasto2', document.getElementById("inputGasto2").value);
        }
        if(document.getElementById("inputGasto3").value!=""){
                sessionStorage.setItem('nombreGasto3', document.getElementById("nombreGasto3").value);
                sessionStorage.setItem('inputGasto3', document.getElementById("inputGasto3").value);
        }
        if(document.getElementById("inputGasto4").value!=""){
            sessionStorage.setItem('nombreGasto4', document.getElementById("nombreGasto4").value);
            sessionStorage.setItem('inputGasto4', document.getElementById("inputGasto4").value);
        }
        if(document.getElementById("inputGasto5").value!=""){
            sessionStorage.setItem('nombreGasto5', document.getElementById("nombreGasto5").value);
            sessionStorage.setItem('inputGasto5', document.getElementById("inputGasto5").value);
        }

        if(document.getElementById("inputVenta1").value!=""){
            sessionStorage.setItem('nombreVenta1', document.getElementById("nombreVenta1").value);
            sessionStorage.setItem('inputVenta1', document.getElementById("inputVenta1").value);
        }
        if(document.getElementById("inputVenta2").value!=""){
            sessionStorage.setItem('nombreVenta2', document.getElementById("nombreVenta2").value);
            sessionStorage.setItem('inputVenta2', document.getElementById("inputVenta2").value);
        }
        if(document.getElementById("inputVenta3").value!=""){
            sessionStorage.setItem('nombreVenta3', document.getElementById("nombreVenta3").value);
            sessionStorage.setItem('inputVenta3', document.getElementById("inputVenta3").value);
        }
        if(document.getElementById("inputVenta4").value!=""){
            sessionStorage.setItem('nombreVenta4', document.getElementById("nombreVenta4").value);
            sessionStorage.setItem('inputVenta4', document.getElementById("inputVenta4").value);
        }
        if(document.getElementById("inputVenta5").value!=""){
            sessionStorage.setItem('inputVenta5', document.getElementById("inputVenta5").value);
        }

        toast.info('Calculo realizado exitosamente, puede imprimirlo si desea! ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        setTimeout(() => {    
            sessionStorage.setItem('btnImprimir',true);
            window.location.reload(false);
              }, 2000);
        
    }

    function Imprimir(e){  
        if( sessionStorage.getItem('btnImprimir')){
            handlePrint();
            removerCookies();
        }
        else{
            toast.error(' No se puede imprimir sin antes haber realizado un calculo! ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
     });


    return(
        <>
            <div className='container'>
                <div className='row' style={{color: "green", fontWeight:"bold",textAlign:"center"}}>
                    <h1>Realizar mis calculos</h1>
                </div>
                <div className='row borders'>
                    <div className='row'>
                        <div className='col-6' style={{textAlign:"center"}} >
                                <button style={{width:"20%"}} className='btn btn-success' onClick={sumarGastos}>Añadir Gasto</button>
                        </div>
                        <div className='col-6' style={{textAlign:"center"}}>
                            <button style={{width:"20%"}} className='btn btn-warning' onClick={restarGastos}>Restar Gasto</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6' style={{textAlign:"center", marginTop:"1%"}}>
                                <button  className='btn btn-success' onClick={sumarIngreso}>Añadir Ingreso</button>
                        </div>
                        <div className='col-6' style={{textAlign:"center", marginTop:"1%"}}>
                            <button className='btn btn-warning' onClick={restarIngreso}>Restar Ingreso</button>
                        </div>
                    </div>
                </div>
               
                   {/* Gastos */}
                <div id="gasto1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none", marginTop:"1%"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir gasto (1)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                   
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"15%",marginTop:"1%"}}>Gasto</label>
                         <input id="nombreGasto1" type="text" className="form-control"  placeholder='Nombre Gasto 1' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputGasto1" type="number" className="form-control"  placeholder='Monto Gasto 1' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                   
                </div>

                <div id="gasto2" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center",color:"black"}}>Introducir gasto (2)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                    
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"15%",marginTop:"1%"}}>Gasto</label>
                         <input  id="nombreGasto2" type="text" className="form-control"  placeholder='Nombre Gasto 2' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputGasto2" type="number" className="form-control"  placeholder='Monto Gasto 2' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                    
                </div>

                <div id="gasto3" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center",color:"black"}}>Introducir gasto (3)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                  
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"15%",marginTop:"1%"}}>Gasto</label>
                         <input  id="nombreGasto3" type="text" className="form-control"  placeholder='Nombre Gasto 3' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputGasto3" type="number" className="form-control"  placeholder='Monto Gasto 3' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                   
                </div>

                <div id="gasto4" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center",color:"black"}}>Introducir gasto (4)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                   
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"15%",marginTop:"1%"}}>Gasto</label>
                         <input  id="nombreGasto4" type="text" className="form-control"  placeholder='Nombre Gasto 4' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputGasto4" type="number" className="form-control"  placeholder='Monto Gasto 4' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                    
                </div>

                <div id="gasto5" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir gasto (5)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                   
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"15%",marginTop:"1%"}}>Gasto</label>
                         <input  id="nombreGasto5" type="text" className="form-control"  placeholder='Nombre Gasto 5' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputGasto5" type="number" className="form-control"  placeholder='Monto Gasto 5' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                    
                </div>

                {/* Ventas */}
                <div id="venta1" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir ingreso (1)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                  
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"20%",marginTop:"1%"}}>Ingreso</label>
                         <input id="nombreVenta1" type="text" className="form-control"  placeholder='Nombre Ingreso' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputVenta1" type="number" className="form-control"  placeholder='Monto Ingreso 1' style={{width:"30%"}}/>
                        
                        </div>
                    </div>
                    
                </div>

                <div id="venta2" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir ingreso (2)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                    
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"20%",marginTop:"1%"}}>Ingreso</label>
                         <input id="nombreVenta2" type="text" className="form-control"  placeholder='Nombre Ingreso' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputVenta2" type="number" className="form-control"  placeholder='Monto Ingreso' style={{width:"30%"}}/>
                        
                        </div>
                    </div>
                   
                </div>

                <div id="venta3" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir ingreso (3)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                   
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"20%",marginTop:"1%"}}>Ingreso</label>
                         <input id="nombreVenta3" type="text" className="form-control"  placeholder='Nombre Ingreso' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputVenta3" type="number" className="form-control"  placeholder='Monto Ingreso 3' style={{width:"30%"}}/>
                        
                        </div>
                    </div>
                    
                </div>

                <div id="venta4" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir ingreso (4)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                    
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"20%",marginTop:"1%"}}>Ingreso</label>
                         <input id="nombreVenta4" type="text" className="form-control"  placeholder='Nombre Ingreso' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputVenta4" type="number" className="form-control"  placeholder='Monto Ingreso' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                   
                </div>

                <div  id="venta5" className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify", display:"none"}}>
                    <div className='separador' style={{width:"10%",marginTop:"1%"}}></div>
                    <span className='fst-italic' style={{width:"15%",textAlign:"center", color:"black"}}>Introducir ingreso (5)</span>
                    <div className='separador' style={{width:"75%",marginTop:"1%"}}></div>
                   
                    <div className='col-12' style={{textAlign:"center"}}>
                        <div className='row' style={{display:"inline-flex"}}>
                         <label for="" style={{width:"20%",marginTop:"1%"}}>Ingreso</label>
                         <input id="nombreVenta5" type="text" className="form-control" placeholder='Nombre Ingreso' style={{width:"30%", marginRight:"1%"}}/>
                         <input id="inputVenta5" type="number" className="form-control"  placeholder='Monto Ingreso' style={{width:"30%"}}/>
                         
                        </div>
                    </div>
                    
                </div>



                 {/* Reporte */}
                <div className='row' style={{color: "green", fontWeight:"bold",textAlign: "justify"}}>
                <div className='separador' style={{width:"100%",marginTop:"1%"}}></div>
                <div className='col-12' style={{padding:"0% 30%"}}>
                    <button type="button"className='btn btn-outline-warning' style={{margin:"4% 10%",width:"40%"}} onClick={() => EnviarProps()}>Realizar Calculo</button>
                    <button type="button"className='btn btn-outline-danger' style={{margin:"4% 0%",width:"40%"}} onClick={() => Imprimir()}>Generar Reporte PDF </button>
                </div>
                
                </div>
                 {/* 
                    <div className='separador' style={{width:"100%",marginTop:"1%"}}></div>
                    <div className='col-12' style={{padding:"0% 30%"}}>
                            <label for="" style={{marginTop:"1%",marginLeft:"30%"}}>Deseo generar mi reporte en:</label>
                            <div class="form-check"  style={{marginLeft:"45%"}}>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    PDF
                                </label>
                            </div>
                            <div class="form-check"  style={{marginLeft:"45%"}}>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Excel
                                </label>
                            </div>
                            <button className='btn btn-outline-primary' style={{margin:"10% 40%",width:"150px"}} onClick={generarReporte} >Generar reporte</button>
                    </div>
                </div> */}
            </div>

             <div style={{display:"none"}}>
             <Report ref={componentRef} />
             </div>   
             <ToastContainer />
        </>
    )

    }

export default Calculo;
