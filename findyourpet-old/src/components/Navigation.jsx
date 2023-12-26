import React from 'react'
import Logo from '../../assets/logo-white.png'

const Navigation = () => {
    return (
        <nav>
            <a href="/cadastro" className="items">😨 Perdi meu bichinho</a>
            <a href="/cadastro" className="items">😱 Encontrei um bichinho</a>
            <a href="/pets"><img src={Logo} alt="Logo" /></a>
            <a href="/cadastro" className="items">🥰 Adotar um animalzinho</a>
            <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer" className="items">😍 Download do App (Android)</a>
            {/* <a href="/maps" className="items">📌 Mapa dos Animais</a> */}
        </nav>
    )
}

export default Navigation
