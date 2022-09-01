import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home"
import NoPage from "./component/NoPage"
import Formulario from "./component/Formulario"



const Rotas = () =>{
    return (
          <BrowserRouter>
                <Routes>
                   <Route path="/"  element={ <Home/>} />
                   <Route path="formulario" element={<Formulario />} />
                   <Route path="*" element={<NoPage />} />
                </Routes>
         </BrowserRouter>
    )    
}

export default Rotas;