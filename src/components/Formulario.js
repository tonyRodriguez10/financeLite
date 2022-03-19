import { ErrorMessage, Form, Field, Formik } from "formik";
import { useFormik } from 'formik';
import React, { useState, useRef, useEffect} from 'react';

const Formulario = () => {

  const [errorNombre] = useState("El campo 'Nombre' es requerido");
  const [errorNombreLetras] = useState("El nombre sólo puede contener letras y espacios");
  const [errorCorreo] = useState("El campo 'Correo' es requerido");
  const [errorCorreoValido] = useState("Debe digitar un correo valido");
  const [errorComentario] = useState("El campo 'Comentario' es requerido");
  const [errorComentarioCaracteres] = useState("El comentario no se puede exceder de 10 carácteres");


  return (
    <Formik
      initialValues={{ nombre: '', correo: '', comentario:''}}

      validate={(values) => {
        let errors = {}

        if (!values.nombre)
          errors.nombre = <div style={{ color: 'white', backgroundColor:"red", textAlign:"center" }}>{errorNombre}</div>
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre))
          errors.nombre = <div style={{ color: 'white', backgroundColor:"red", textAlign:"center" }}>{errorNombreLetras}</div>

        if (!values.correo)
          errors.correo = <div style={{ color: 'white', backgroundColor:"red", textAlign:"center" }}>{errorCorreo}</div>
        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo))
          errors.correo = <div style={{ color: 'white', backgroundColor:"red", textAlign:"center" }}>{errorCorreoValido}</div>
       
          if (!values.comentario)
          errors.comentario = <div style={{ color: 'white', backgroundColor:"red", textAlign:"center" }}>{errorComentario}</div>
        else if (values.comentario.length > 10)
          errors.comentario = <div style={{ color: 'white', backgroundColor:"red", textAlign:"center" }}>{errorComentarioCaracteres}</div>

        return errors
      }
      }

      onSubmit={(values, { resetForm }) => {
          
        alert(JSON.stringify(values));
        resetForm();
      }}
    >
      {({ errors }) => (
        <div class="container pb-5">

        <h2 style={{color:"orange", textDecoration:"underline"}}>Sugerencias && Comentarios</h2> 

         <Form className="formulario">

          <div class="mb-3">
            <label  htmlFor="nombre" class="form-label text-dark">Nombre: </label>
            <Field class="form-control" id="nombre" name="nombre" placeholder="Nombre" type="text"/>
            <ErrorMessage  class="form-text text-warning " name="nombre" component={() => <div className="error">{errors.nombre}</div>} />
          </div>

          <div class="mb-3">
            <label  htmlFor="correo" class="form-label text-dark">Correo electrónico: </label>
            <Field class="form-control" id="correo" name="correo" placeholder="Correo" type="text"/>
            <ErrorMessage  class="form-text text-warning " name="correo" component={() => <div className="error">{errors.correo}</div>} />
          </div>

          <div class="mb-3">
            <label  htmlFor="comentario" class="form-label text-dark">Comentario</label>
            <Field as='textarea' class="form-control" id="comentario" name="comentario" type="text"/>
            <ErrorMessage  class="form-text text-warning " name='comentario' component={() => <div className='error'>{errors.comentario}</div>} />
          </div>

        <div class="mb-3 form-check">
        <input style={{backgroundColor:"orange"}} type="checkbox" class="form-check-input" id="id_notificarCorreo"/>
        <label class="form-check-label" for="id_notificarCorreo">Permitir enviar correos de promociones a mi correo</label>
        </div>

          <button type="submit" class="btn" style={{backgroundColor:"orange", fontWeight:"bold"}}>Enviar</button>
        </Form>
        </div>
      )
      }
    </Formik>
  );
}

export default Formulario;