import React, { useContext } from 'react'
import Home from './pages/Home'
import Pets from './pages/Pets'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Carreiras from './pages/Carreiras'
import ComoFunciona from './pages/ComoFunciona'
import SignUp from './pages/SignUp'
import Maps from './pages/Maps'


import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import {lightTheme,darkTheme} from './utils/Colors'
import { Context } from './utils/ThemeContext'

const App = () => {

    const {theme} = useContext(Context)
 

    return (
        <>
            <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
                <GlobalStyle />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pets" element={<Pets />} exact />
                        <Route path="/sobre-nos" element={<SobreNos />} exact />
                        <Route path="/fale-conosco" element={<FaleConosco />} exact />
                        <Route path="/carreiras" element={<Carreiras />} exact />
                        <Route path="/como-funciona" element={<ComoFunciona />} exact />
                        <Route path="/cadastro" element={<SignUp />} exact />
                        <Route path="/maps" element={<Maps />} exact />
                    </Routes>
            </ThemeProvider>
        </>
    )
}

export default App
