import React from 'react'
import PetsDetails from '../components/PetsDetails'

const Footer = () => {
    return (
        <>
            <PetsDetails>
                <hr />
                <footer>
                    <div className="footer-content break">
                        <h2>FindYourPet</h2>
                        <a href="http://kalify.vercel.app/" target="_blank" rel="noreferrer">Site Institucional <i className="uil uil-external-link-alt" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1" target="_blank" rel="noreferrer">Download do App  <i className="uil uil-external-link-alt" /></a>
                        <a href="/carreiras">Carreiras</a>
                        <a href="mailto:kalifyinc@gmail.com">Fale Conosco</a>
                        <a href="/termos">Termos de Uso</a>
                        <a href="/politicas">Políticas de Privacidade</a>
                    </div>

                    <div className="footer-content break">
                        <h2>Descubra</h2>
                        <a href="/cadastro">Cadastre seu Pet</a>
                        <a href="/como-funciona">Como funciona?</a>
                        <a href="/sobre-nos">Sobre nós</a>
                        {/* <a href="#" target="_blank">Blog <i className="uil uil-external-link-alt"></i></a> */}
                    </div>

                    <div className="footer-content break">
                        <h2>Social</h2>
                        <a href="https://twitter.com/KalifyInc" target="_blank" rel="noreferrer">Twitter <i className="uil uil-external-link-alt" /></a>
                        <a href="https://discord.gg/jhSepmE7nN" target="_blank" rel="noreferrer">Discord <i className="uil uil-external-link-alt" /></a>
                    </div>
                </footer>

                <div className="copyright">
                    <i> © 2022 - {new Date().getFullYear()} FindYourPet - Kalify Inc | Todas as imagens dos animais são de propriedade de seus devidos anunciantes</i>
                </div>
            </PetsDetails>
        </>
    )
}

export default Footer
