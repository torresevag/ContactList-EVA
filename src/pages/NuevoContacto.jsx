import {Link, useNavigate} from 'react-router-dom';
import {useContext, useState} from 'react';
import { Context } from '../main';

export const NuevoContacto = () => {
     const [contacto, setContacto] = useState({Nombre:'', Apellido:'', Telefono:'', Email:''});
     
     const {store, dispatch} = useContext(Context);
     const navigate = useNavigate();


 const handleChange = (e)=> {
        setContacto({...contacto, [e.target.name] : e.target.value})
      }

      const agregarContacto = (e) => {
        e.preventDefault();
        dispatch({ type:"NUEVO_CONTACTO", value: contacto})
        navigate('/');
      }
     

  return(<>
  <h1>AGREGAR UN NUEVO CONTACTO</h1>
    <Link to="/">
    <button>Volver a CONTACTOS</button>
    </Link>

<form onSubmit={agregarContacto} className= "crearContacto" id="crearContacto">
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
  <button type="submit" >Agregar Contacto  </button>

</form>

  </>
  )

}