import React from 'react'
import './App.css'

import App from './App'
import Pets from './pages/Pets'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Carreiras from './pages/Carreiras'
import ComoFunciona from './pages/ComoFunciona'
import SignUp from './pages/SignUp'
import Maps from './pages/Maps'
import 'mapbox-gl/dist/mapbox-gl.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/pets" element={<Pets/>} exact />
                <Route path="/sobre-nos" element={<SobreNos/>} exact />
                <Route path="/fale-conosco" element={<FaleConosco/>} exact />
                <Route path="/carreiras" element={<Carreiras/>} exact />
                <Route path="/como-funciona" element={<ComoFunciona/>} exact />
                <Route path="/cadastro" element={<SignUp/>} exact />
                <Route path="/maps" element={<Maps/>} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
