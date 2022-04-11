import React from 'react'
import PetsDetails from '../components/PetsDetails'
import AddPetButton from '../components/AddPetButton'

import Logo from '../../assets/logo-white.png'

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
                    <a href="">Animais perdidos</a>
                    <a href="">Animais resgatados</a>
                    <a href="">Animais em adoção</a>
                    <a href="">Animais no mapa</a>
                </div>
            </div>

            <h2 style={{marginLeft: '20px'}}>Últimos animais cadastrados</h2>
            <div className="pets-list">
            <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Clifford</h3>
                            <p>Pequeno, cinza, carinhoso, gosta de fios, ama bolinhas</p>
                            <p><i className="uil uil-map-marker"></i> Campos do Jordão, Campinas</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Flesha</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>                    </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Judith</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>
                        </div>
                    </div>
                </a>
                
                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Clifford</h3>
                            <p>Pequeno, cinza, carinhoso, gosta de fios, ama bolinhas</p>
                            <p><i className="uil uil-map-marker"></i> Campos do Jordão, Campinas</p>
                        </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Flesha</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>                    </div>
                    </div>
                </a>

                <a href="">
                    <div className="pets-list-item">
                        <img src="https://fastly.4sqi.net/img/general/200x200/3527318_fY4uOaXHWW8AjNKB1O0TtPP6ZYUR0NIetudoM2HzOoo.jpg" alt=""/>
                        <div className="pets-list-item-info">
                            <h3>Judity</h3>
                            <p>Descrição do animalzinho</p>
                            <p><i className="uil uil-map-marker"></i> Localização do pequeno</p>
                        </div>
                    </div>
                </a>
            </div>
            <AddPetButton/>
        </PetsDetails>
    )
}

export default Pets