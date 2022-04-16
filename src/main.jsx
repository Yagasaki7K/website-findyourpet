import React from 'react'
import createRoot from 'react-dom'
import './App.css'

import App from './App'
import Pets from './pages/Pets'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Carreiras from './pages/Carreiras'
import ComoFunciona from './pages/ComoFunciona'
import SignUp from './pages/SignUp'
import Maps from './pages/Maps'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoieWFnYXNha2kiLCJhIjoiY2tnNno3ejN5MDJhZzJ3bXlmbzV2ZWhpaSJ9.nv2v5aSOhEwDtcbAKii8CA'

if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
    throw new Error('Geolocation is not supported by your browser');
}

import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/pets" element={<Pets/>} exact />
                <Route path="/sobre-nos" element={<SobreNos/>} exact />
                <Route path="/fale-conosco" element={<FaleConosco/>} exact />
                <Route path="/carreiras" element={<Carreiras/>} exact />
                <Route path="/como-funciona" element={<ComoFunciona/>} exact />
                <Route path="/signup" element={<SignUp/>} exact />
                <Route path="/maps" element={<Maps/>} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
