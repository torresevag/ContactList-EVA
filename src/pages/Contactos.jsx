
import React, {useContext} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Context } from "../main.jsx";






export const Contactos = () => {
   const {store, dispatch} =  useContext(Context)
   
;

const eliminarContacto= (index) => {
  dispatch({type: "BORRAR_CONTACTO", index })
}


  return(<>
   <h1>CONTACTOS</h1>
  <Link className="agregar" to= "/nuevo">AGREGAR CONTACTO</Link>
 
  <ul className="contactos">
    {store.contactos.map((contacto, index)=> ( 
      <li key={index}>
<b>      Nombre:</b>       {contacto.Nombre}  
       <br/>
       <b>Apellido:</b>{contacto.Apellido} 
    <br/>
  <b> Teléfono:</b> {contacto.Telefono}
    <br/>
<b>    Email:</b> {contacto.Email}
    <br/>
     <Link to={`/editar/${index}`}>  
     <button>🖋️</button>
     </Link>
      <button onClick={ () => eliminarContacto(index)}>❌</button>
      </li>
    ))}
  </ul>
  </>
  )
}