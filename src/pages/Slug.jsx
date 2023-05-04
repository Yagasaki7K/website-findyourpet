import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import petServices from '../services/pet.services'


const slugPage = () => {
    const { slug } = useParams();
    const [Pets, setPets] = useState([])

    useEffect(() => {
        getPets()
    }, [])

    const getPets = async () => {
        const data = await petServices.getAllPets()
        setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        Pets && Pets.map((pets, index) => (
            pets.slug === slug ? (
                <div key={index}>
                    <h1>
                        {pets.name}
                    </h1>

                    <a href={`https://api.whatsapp.com/send/?phone=` + pets?.contact + '&text=Olá%2C+tudo+bom%3F+Vim+do+FindYourPet+e+estou+interessada+em+saber+mais+a+respeito+do+pet+que+está+no+anúncio+..'} target="_blank" rel="noreferrer">WhatsApp: {pets?.contact}</a>
                </div>
            ) : null
        )
        )
    )
}

export default slugPage
