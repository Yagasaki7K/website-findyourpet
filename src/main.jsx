import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import App from './App'
import Pets from './pages/Pets'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Carreiras from './pages/Carreiras'
import ComoFunciona from './pages/ComoFunciona'
import SignUp from './pages/SignUp'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/pets" element={<Pets/>} exact />
                    <Route path="/sobre-nos" element={<SobreNos/>} exact />
                    <Route path="/fale-conosco" element={<FaleConosco/>} exact />
                    <Route path="/carreiras" element={<Carreiras/>} exact />
                    <Route path="/como-funciona" element={<ComoFunciona/>} exact />
                    <Route path="/signup" element={<SignUp/>} exact />
                </Routes>
            </React.StrictMode>,
        </BrowserRouter>
)
document.getElementById('root')
