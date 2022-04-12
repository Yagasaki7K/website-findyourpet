import React from 'react'
import PetsDetails from '../components/PetsDetails'
import AddPetButton from '../components/AddPetButton'

import Logo from '../../assets/logo-white.png'

function LostAnimals() {}
function RescueAnimals() {}
function AdoptAnimals() {}
function MapAnimals() {
    window.location.href="/map"
}

const Pets = () => {
    return (
        <PetsDetails>
            <nav>
                <a href="">Perdi meu bichinho</a>
                <a href="">Encontrei um bichinho</a>
                <a href="/pets"><img src={Logo} alt="Logo"/></a>
                <a href="">Quero adotar um animalzinho</a>
                <a href="">Localizar um animalzinho</a>
            </nav>

            <a href="/signup" className="advice">
                <i class="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo adotar um? Ou encontrou um perdido? Cadastre ele! 
            </a>

            <div className="categories">
                <h2>Categorias</h2>
                <div className="categories-list">
                    <a onClick={LostAnimals} className="menu">Animais perdidos</a>
                    <a onClick={RescueAnimals} className="menu">Animais resgatados</a>
                    <a onClick={AdoptAnimals} className="menu">Animais em adoção</a>
                    <a onClick={MapAnimals} className="menu">Animais no mapa</a>
                </div>
            </div>

            <h2 style={{marginLeft: '20px'}}>Últimos animais cadastrados</h2>
            <div className="pets-list">
            <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Clifford • Adoção</h3>
                            <p>Pequeno, cinza, carinhoso, gosta de fios, ama bolinhas</p>
                            <p><i className="uil uil-map-marker"></i> Campos do Jordão, Campinas</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Flesha • Resgate</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Judith • Perdido</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>
                        </div>
                    </div>
                </a>
                
                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Clifford • Perdido</h3>
                            <p>Pequeno, cinza, carinhoso, gosta de fios, ama bolinhas</p>
                            <p><i className="uil uil-map-marker"></i> Campos do Jordão, Campinas</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Flesha • Resgate</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>                    </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Judity • Adoção</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>
                        </div>
                    </div>
                </a>
            </div>
            <AddPetButton/>

            <footer>
                <div className="footer-content">
                    <h2>FindYourPet</h2>
                    <a href="http://kalify.netlify.com/" target="_blank">Site Institucional <i class="uil uil-external-link-alt"></i></a>
                    <a href="/sobre-nos">Sobre nós</a>
                    <a href="/fale-conosco">Fale Conosco</a>
                    <a href="/carreiras">Carreiras</a>
                </div>

                <div className="footer-content">
                    <h2>Descubra</h2>
                    <a href="/signup">Cadastre seu Pet</a>
                    <a href="/como-funciona">Como funciona?</a>
                    <a href="#" target="_blank">Blog <i class="uil uil-external-link-alt"></i></a>
                </div>

                <div className="footer-content">
                    <h2>Social</h2>
                    <a href="https://twitter.com/KalifyInc" target="_blank">Twitter <i class="uil uil-external-link-alt"></i></a>
                    <a href="https://instagram.com/yagasaki.dev" target="_blank">Instagram <i class="uil uil-external-link-alt"></i></a>
                </div>
            </footer>

            <div className="copyright">
                <i> © Copyright 2018 - {new Date().getFullYear()} - Kalify Inc - Todos os direitos reservados</i>
            </div>
        </PetsDetails>
    )
}

export default Pets