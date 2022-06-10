import React, { useEffect, useState } from 'react'
import PetsDetails from '../components/PetsDetails'
import Footer from '../components/Footer'
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

    return (
        <PetsDetails>
            <nav>
                <a href="/signup">😨 Perdi meu bichinho</a>
                <a href="/signup">😱 Encontrei um bichinho</a>
                <a href="/pets"><img src={Logo} alt="Logo"/></a>
                <a href="/signup">🥰 Quero adotar um animalzinho</a>
                <a href="/maps">📌 Localizar um animalzinho</a>
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

            <h2 className="titlePets">Últimos animais cadastrados*</h2>
            <i className="advicePets">*Os animais serão deletados automaticamente após cinco dias desde a data da publicação</i>
            <div className="pets-list">
                {
                    petData && petData.map((pets, index) => (

                        <a href={`https://wa.me/` + pets?.contact} key={index}>
                        <div className="pets-list-item">
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

            <Footer/>
        </PetsDetails>
    )
}

export default Pets