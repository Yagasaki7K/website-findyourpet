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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/carreiras" element={<Carreiras />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
)
