
import React, {useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Context } from "../main.jsx";

export const FormularioContacto = () => {
     
     const {store, dispatch} = useContext(Context);
     const navigate = useNavigate();

     const [crearContacto, setCrearContacto] = useState({Nombre: "", Apellido: "", Telefono: "", Email: ""})


const handleChange =(e) => {
  setCrearContacto({
    ...crearContacto,
    [e.target.name]:e.target.value
  });
};
      const agregarContacto = (e) => {
        e.preventDefault();
        dispatch({ type:"NUEVO_CONTACTO", value: crearContacto})
        navigate('/');
      }

  return(<>
  <h1>AGREGAR UN NUEVO CONTACTO</h1>
    <Link to="/">
    <button>Volver a CONTACTOS</button>
    </Link>

<form  onSubmit={agregarContacto} className= "crearContacto" id="crearContacto">
  <label >Nombre:</label>
  <input  name="Nombre" value={crearContacto.Nombre} onChange={handleChange} />
  <br/>
  <label >Apellido:</label>
  <input  name="Apellido" value={crearContacto.Apellido} onChange={handleChange} />
  <br/>
  <label >Teléfono:</label>
  <input  name="Telefono" value={crearContacto.Telefono} onChange={handleChange} />
  <br/>
  <label >Email:</label>
  <input  name="Email" value={crearContacto.Email} onChange={handleChange} />
  <br/>
  <button type="submit">Agregar Contacto  </button>

</form>

  </>)

}