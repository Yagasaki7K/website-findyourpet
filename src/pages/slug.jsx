import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import petServices from '../services/pet.services'

import Navigation from '../components/Navigation';
import PetsDetails from '../components/PetsDetails';
import SlugDetails from '../components/SlugDetails';
import AddPetButton from '../components/AddPetButton';
import Footer from '../components/Footer';
import imageNotFound from '../../assets/imagenotfound.png'

const slugPage = () => {
    const { slug } = useParams();
    const [Pets, setPets] = useState([])

    // eslint-disable-next-line no-unused-vars
    const [Link, setLink] = useState(slug)

    useEffect(() => {
        getPets()
    }, [])

    const getPets = async () => {
        const data = await petServices.getAllPets()
        setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getLink = () => {
        navigator.clipboard.writeText('https://findyourpet.vercel.app/' + Link);
        alert('Link copiado com sucesso!')
    }

    const firebaseURL = 'https://firebasestorage.googleapis.com/v0/b/kalify-findyourpet.appspot.com/o/files%2F'

    return (
        <PetsDetails>
            <Navigation />
            <a href="/cadastro" className="advice">
                <i className="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo doar um? Ou encontrou um perdido? Cadastre ele!&nbsp;<i className="uil uil-shield-exclamation"></i>
            </a>
            <SlugDetails>
                {
                    Pets && Pets.map((pets, index) => (
                        pets.slug === slug ? (
                            <div className="content" key={index}>
                                <div className="leftContent">
                                    <img src={pets.image ? firebaseURL + pets.image + `?alt=media` : imageNotFound} alt={pets?.name} />
                                </div>

                                <div className="rightContent">
                                    <h1>
                                        {pets.name} - {pets.status}
                                    </h1>

                                    <p>Quem é {pets.name}? {pets?.description}</p>
                                    <p><i className="uil uil-map-marker"></i> Localizado em {pets?.locale}</p>

                                    <div className="link">
                                        <a href={`https://api.whatsapp.com/send/?phone=` + pets?.contact + '&text=Olá%2C+tudo+bom%3F+Vim+do+FindYourPet+e+estou+interessada+em+saber+mais+a+respeito+do+pet+que+está+no+anúncio+..'} target="_blank" rel="noreferrer"><i className="uil uil-whatsapp"></i> Entre em Contato!</a>

                                        <button onClick={getLink} id="buttonON"><i className="uil uil-share-alt"></i> Compartilhe!</button>
                                        <button id="buttonOFF">Link Copiado!</button>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )
                    )
                }
            </SlugDetails>

            <AddPetButton />
            <Footer />
        </PetsDetails >
    )
}

export default slugPage
