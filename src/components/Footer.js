import React from 'react';
import '../css/footer.css';

function footer() {
    return (
        <React.Fragment>
            <div id="footer" class="page-footer2">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Finance lite</h5>
                    <p class="grey-text text-lighten-4">Contacto: 8888-8888</p>
            </div>
            <div class="col l4 offset-l2 s12" style={{textAlign:"end"}}>
                <h5 class="white-text">Redes Sociales</h5>
          
                <a class="grey-text text-lighten-3" href="#!">Facebook</a><br></br>
            <a class="grey-text text-lighten-3" href="#!">Twitter</a>
                
            </div>
        </div>
    </div>
    <div class="footer-copyright" style={{textAlign:"center"}}>
        <div class="container">
            Todos los derechos reservados © 2022 Copyright Text
        </div>
    </div>
</div>
        </React.Fragment>
    );
  }



export default footer;
