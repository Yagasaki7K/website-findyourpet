import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'

const Carreiras = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h2>Carreiras</h2>
            <p>minus natus fuga libero aliquam neque!</p>
        </SubPages>
    )
}

export default Carreiras