import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home"
import NoPage from "./component/NoPage/NoPage"



const Rotas = () =>{
    return (
          <BrowserRouter>
                <Routes>
                   <Route path="/"  element={ <Home/>} />
                   <Route path="*" element={<NoPage />} />
                </Routes>
         </BrowserRouter>
    )    
}

export default Rotas;