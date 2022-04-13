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

import { BrowserRouter as Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>

        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/pets" component={Pets} exact />
            <Route path="/sobre-nos" component={SobreNos} exact />
            <Route path="/fale-conosco" component={FaleConosco} exact />
            <Route path="/carreiras" component={Carreiras} exact />
            <Route path="/como-funciona" component={ComoFunciona} exact />
            <Route path="/signup" component={SignUp} exact />
        </Switch>

    </React.StrictMode>,
    document.getElementById('root')
)
