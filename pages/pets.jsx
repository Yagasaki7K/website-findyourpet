import React, { useEffect, useState } from 'react'
import PagesDetails from '../src/components/PagesDetails'
import petServices from '../src/services/pet.services'
import Navigation from '../src/components/Navigation'
import Footer from '../src/components/Footer'

const pets = () => {
    const [Pets, setPets] = useState([])

    useEffect(() => {
        getPets()
    }, [])

    async function getPets() {
        const data = await petServices.getAllPets()
        setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    async function deletePets(id, image) {
        await Promise.all([PetServices.deletePets(id), ImgServices.deleteImage(image)])
    }

    async function checkTime() {
        const data = await PetServices.getAllPets()
        const id = data.docs.map((doc) => doc.id)
        const image = data.docs.map((doc) => doc.data().image)
        const validUntil = data.docs.map((doc) => doc.data().validDate)

        const date = new Date()
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        const today = `${day}/${month}/${year}`

        for (let index = 0; index < validUntil.length; index++) {
            if (validUntil[index] === today) {
                deletePets(id[index], image[index])
                getPets()
            }
        }
    }

    setInterval(checkTime, 86400000)
    return (
        <>
            <Navigation />
            <PagesDetails>
                <a href="/reporte" className="advice">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo doar um? Ou encontrou um perdido? Cadastre ele!&nbsp;<i className="uil uil-shield-exclamation"></i>
                </a>

                <h2 className="titlePets">Últimos animais cadastrados:</h2>
                {/* <div className="advicePets"><i>*Os animais serão deletados automaticamente após 60 dias após a data da publicação</i></div> */}
                <div className="container">
                    {
                        Pets ? Pets.map((pets, index) => (
                            <a href={`/pets/` + pets.slug} key={index}>
                                <div className="content">
                                    <div className="image">
                                        <img src={pets.imageURL ? pets.imageURL : '/faind.jpg'} alt={pets.name} />
                                    </div>

                                    <div className="text">
                                        <p>{pets.name}</p>
                                        <p>{pets.createdAt}</p>
                                        <p>{pets.locale}</p>
                                    </div>
                                </div>
                            </a>
                        )) : 'Carregando...'
                    }
                </div>
                {/* <Modal /> */}
            </PagesDetails>
            <Footer />
        </>
    )
}

export default pets