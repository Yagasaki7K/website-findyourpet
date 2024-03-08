import React from 'react'
import FooterDetails from './FooterDetails'

const Footer = () => {
    return (
        <>
            <FooterDetails>
                <footer>
                    <div className="footer-content break">
                        <h2>Geral</h2>
                        <li><a href="/reporte">Perdi meu pet</a></li>
                        <li><a href="/reporte">Achei um pet</a></li>
                        <li><a href="/pets">Quero adotar um pet</a></li>
                        <li><a href="#">Artigos</a></li>
                        <li><a href="#">Mapa</a></li>
                        <li><a href="#">Sobre</a></li>
                    </div>

                    <div className="footer-content break">
                        <h2>Sobre Nós</h2>
                        <li><a href="#">Nossa missão</a></li>
                        <li><a href="#">Voluntários</a></li>
                        <li><a href="#">Junte-se ao time</a></li>
                        <li><a href="#">Contato</a></li>
                    </div>

                    <div className="footer-content break">
                        <h2>Suporte</h2>
                        <li><a href="#">Centro de ajuda</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Políticas de Privacidade</a></li>
                    </div>
                </footer>

                <hr />

                <div className="copyright">
                    <p> © 2022 - {new Date().getFullYear()} FindYourPet - Kalify Inc | Todas as imagens são de responsabilidade de seus anunciantes</p>
                </div>
            </FooterDetails>
        </>
    )
}

export default Footer
