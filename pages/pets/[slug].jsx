import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PagesDetails from '../../src/components/PagesDetails'
import Navigation from '../../src/components/Navigation'
import Footer from '../../src/components/Footer'
import SlugDetails from '../../src/components/SlugDetails'
import petServices from '../../src/services/pet.services'
import { toast } from 'sonner'

const slug = () => {
    const router = useRouter()
    const { slug } = router.query
    const [Pets, setPets] = useState([])

    useEffect(() => {
        getPets()
    }, [])

    const getPets = async () => {
        const data = await petServices.getAllPets()
        setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getLink = (slug) => {
        navigator.clipboard.writeText('https://findyourpet.vercel.app/' + slug);
        toast.success('Link copiado com sucesso!')
    }

    console.log(slug)
    return (
        <>
            <Navigation />
            <PagesDetails>
                <SlugDetails>
                    {
                        Pets && Pets.map((pets, index) => (
                            pets.slug === slug ? (
                                <div className="content" key={index}>
                                    <div className="leftContent">
                                        <img src={pets.imageURL ? pets.imageURL : 'faind.jpg'} alt={pets?.name} />
                                    </div>

                                    <div className="rightContent">
                                        <h1>
                                            {pets.name} - {pets.status}
                                        </h1>
                                        <p><i className="uil uil-map-marker"></i> Localizado em {pets?.locale}</p>

                                        <p>Quem é {pets.name}? <br /> {pets?.description}</p>

                                        <div className="link">
                                            <a href={`https://api.whatsapp.com/send/?phone=` + pets?.contact + '&text=Olá%2C+tudo+bom%3F+Vim+do+FindYourPet+e+estou+interessada+em+saber+mais+a+respeito+do+pet+que+está+no+anúncio+..'} target="_blank" rel="noreferrer"><i className="uil uil-whatsapp"></i> Entre em Contato!</a>

                                            <button onClick={() => { getLink(pets.slug) }} id="buttonON"><i className="uil uil-share-alt"></i> Compartilhe!</button>
                                            <button id="buttonOFF">Link Copiado!</button>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        )
                        )
                    }
                </SlugDetails>
            </PagesDetails>
            <Footer />
        </>
    )
}

export default slug