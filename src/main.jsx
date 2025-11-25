import React,{useReducer, createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { RouterProvider } from "react-router-dom"; 
import { router } from "./routes"; 



export const Context = createContext();

const reducer = (state, action) => {
    if(action.type === "NUEVO_CONTACTO"){
       return {
        ...state, contactos: [ ...state.contactos, action.value]
       } 
    }

    if(action.type === "EDITAR_CONTACTO"){
         const lista =  [...state.contactos];
            lista[action.index] = action.value;
            return {...state, contactos: lista};
            }
         
    
    

    if(action.type === "BORRAR_CONTACTO"){
         return {...state, contactos: state.contactos.filter((_, index)=>
            index !== action.index)
        }
    }
  
return state;
}


const Main = () => {
    const [store, dispatch]= useReducer(reducer, {contactos : [{ id:1, Nombre : "Eva", Apellido: "Torres", Telefono: "123456789", Email: "eva123@gmail.com"}], })
    return (
        <React.StrictMode>  
    
            <Context.Provider value={{store, dispatch}}> 
            
                <RouterProvider router={router}/>
            </Context.Provider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
