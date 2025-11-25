// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,    createRoutesFromElements,    Route,} from "react-router-dom";


import { Contactos } from "./pages/Contactos";
import { EditarContacto } from "./pages/EditarContacto";
import { NuevoContacto } from "./pages/NuevoContacto";










export const router = createBrowserRouter(
    createRoutesFromElements(
    
        <>

          <Route element={<Contactos/>} path= "/" />
          <Route  element={ < NuevoContacto />} path="/nuevo"  /> 
          <Route  element={< EditarContacto/>} path="/editar/:index" />
        </>)
 
      
   
   
);