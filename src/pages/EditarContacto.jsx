

import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams, Link  } from "react-router-dom";
import { Context } from "../main.jsx";



export const EditarContacto = () => {
    const [contacto, setContacto] = useState({Nombre:'', Apellido:'', Telefono:'', Email:''});
      const {store, dispatch} = useContext(Context); 
      const navigate = useNavigate();
   const {index} = useParams();

   useEffect(()=>{
   if( store.contactos[index]){
    setContacto(store.contactos[index])
   }
    }, [index, store.contactos])

const handleChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value });
  };

   const editarContacto = (e) => {
    e.preventDefault();
      dispatch({type: "EDITAR_CONTACTO", index: +index , value:contacto})
      navigate('/');
}





  return(<>
  <h1>EDITAR CONTACTO</h1>
   <Link to="/">
    <button>Volver a CONTACTOS</button>
    </Link>

<form onSubmit={editarContacto} className= "crearContacto" id="crearContacto">
  <label >Nombre:</label>
  <input  name="Nombre" value={contacto.Nombre} onChange={handleChange}/>
  <br/>
  <label >Apellido:</label>
  <input  name="Apellido" value={contacto.Apellido} onChange={handleChange} />
  <br/>
  <label >Teléfono:</label>
  <input  name="Telefono" value={contacto.Telefono} onChange={handleChange} />
  <br/>
  <label >Email:</label>
  <input  name="Email" value={contacto.Email} onChange={handleChange} />
  <br/>
  <button type="submit">Agregar Contacto  </button>

</form>

  </>)
}
