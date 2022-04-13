import React, { useEffect, useState } from 'react'
import PetsDetails from '../components/PetsDetails'
import AddPetButton from '../components/AddPetButton'

import Logo from '../../assets/logo-white.png'

import sanityClient from '../client'


function Pets() {
    const [petData, setPetData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "Animals"]{
                    name,
                    description,
                    contact,
                    type,
                    location,
                    image{
                        asset->{
                            url,
                            assetId
                        },
                    }
                }`
        )
        .then((data) => setPetData(data))
        .catch(console.error);
    }, []);

    function LostAnimals() {
        window.location.href="/map"
    }
    function RescueAnimals() {
        window.location.href="/map"
    }
    function AdoptAnimals() {
        window.location.href="/map"
    }
    function MapAnimals() {
        window.location.href="/map"
    }

    return (
        <PetsDetails>
            <nav>
                <a href="/signup">Perdi meu bichinho</a>
                <a href="/signup">Encontrei um bichinho</a>
                <a href="/pets"><img src={Logo} alt="Logo"/></a>
                <a href="/signup">Quero adotar um animalzinho</a>
                <a href="/signup">Localizar um animalzinho</a>
            </nav>

            <a href="/signup" className="advice">
                <i className="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo adotar um? Ou encontrou um perdido? Cadastre ele! 
            </a>

            {/* <div className="categories">
                <h2>Categorias</h2>
                <div className="categories-list">
                    <a onClick={LostAnimals} className="menu">Animais perdidos</a>
                    <a onClick={RescueAnimals} className="menu">Animais resgatados</a>
                    <a onClick={AdoptAnimals} className="menu">Animais em adoção</a>
                    <a onClick={MapAnimals} className="menu">Animais no mapa</a>
                </div>
            </div> */}

            <h2 style={{marginLeft: '20px'}}>Últimos animais cadastrados</h2>
            <div className="pets-list">
            
                {
                    petData && petData.map((pets, index) => (

                        <a href={`tel:` + pets?.contact}>
                        <div className="pets-list-item" key={index}>
                            <img src={pets.image.asset.url} alt={pets?.name} />

                            <div className="pets-list-item-info">
                                <h3>{pets?.name} • {pets?.type}</h3>
                                <p>{pets?.description}</p>
                                <p><i className="uil uil-map-marker"></i> {pets?.location}</p>
                                <p><i className="uil uil-phone"></i> {pets?.contact}</p>
                            </div>
                        </div>
                        </a>
                    ))
                }
            
            </div>
            <AddPetButton/>

            <footer>
                <div className="footer-content">
                    <h2>FindYourPet</h2>
                    <a href="http://kalify.netlify.com/" target="_blank">Site Institucional <i className="uil uil-external-link-alt"></i></a>
                    <a href="/sobre-nos">Sobre nós</a>
                    <a href="/fale-conosco">Fale Conosco</a>
                    <a href="/carreiras">Carreiras</a>
                </div>

                <div className="footer-content">
                    <h2>Descubra</h2>
                    <a href="/signup">Cadastre seu Pet</a>
                    <a href="/como-funciona">Como funciona?</a>
                    <a href="#" target="_blank">Blog <i className="uil uil-external-link-alt"></i></a>
                </div>

                <div className="footer-content">
                    <h2>Social</h2>
                    <a href="https://twitter.com/KalifyInc" target="_blank">Twitter <i className="uil uil-external-link-alt"></i></a>
                    <a href="https://instagram.com/yagasaki.dev" target="_blank">Instagram <i className="uil uil-external-link-alt"></i></a>
                </div>
            </footer>

            <div className="copyright">
                <i> © Copyright 2018 - {new Date().getFullYear()} - Kalify Inc - Todos os direitos reservados</i>
            </div>
        </PetsDetails>
    )
}

export default Pets