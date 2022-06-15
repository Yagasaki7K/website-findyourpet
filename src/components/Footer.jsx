import React from 'react'
import PetsDetails from '../components/PetsDetails'

const Footer = () => {
    return (
        <>
            <PetsDetails>
                <hr/>
                <footer>
                    <div className="footer-content break">
                        <h2>FindYourPet</h2>
                        <a href="http://kalify.vercel.app/" target="_blank">Site Institucional <i className="uil uil-external-link-alt"></i></a>
                        <a href="/sobre-nos">Sobre nós</a>
                        <a href="/fale-conosco">Fale Conosco</a>
                        <a href="/carreiras">Carreiras</a>
                    </div>

                    <div className="footer-content break">
                        <h2>Descubra</h2>
                        <a href="/cadastro">Cadastre seu Pet</a>
                        <a href="/como-funciona">Como funciona?</a>
                        <a href="#" target="_blank">Blog <i className="uil uil-external-link-alt"></i></a>
                    </div>

                    <div className="footer-content break">
                        <h2>Social</h2>
                        <a href="https://twitter.com/KalifyInc" target="_blank">Twitter <i className="uil uil-external-link-alt"></i></a>
                        <a href="https://instagram.com/yagasaki.dev" target="_blank">Instagram <i className="uil uil-external-link-alt"></i></a>
                    </div>
                </footer>

                <div className="copyright">
                    <i> © 2018 - {new Date().getFullYear()} - Kalify Inc |
                    © {new Date().getFullYear()} - FindYourPet</i>
                </div>
            </PetsDetails>
        </>
    )
}

export default Footer