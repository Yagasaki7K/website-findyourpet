import React from 'react'
import PagesDetails from '../../src/components/PagesDetails'
import Navigation from '../../src/components/Navigation'
import Footer from '../../src/components/Footer'
import SlugDetails from '../../src/components/SlugDetails'
import petServices from '../../src/services/pet.services'
import { toast } from 'sonner'

export async function getServerSideProps(context) {
    const { slug } = context.params;

    const data = await petServices.getAllPets();
    const pets = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const pet = pets.find((p) => p.slug === slug) || null;

    return {
        props: {
            pet,
        },
    };
}

const PetSlugPage = ({ pet }) => {
    const getLink = (slug) => {
        if (typeof window !== "undefined" && navigator?.clipboard) {
            navigator.clipboard.writeText('https://findyourpet.vercel.app/pets/' + slug);
            toast.success('Link copiado com sucesso!');
        }
    };

    return (
        <>
            <Navigation />
            <PagesDetails>
                <SlugDetails>
                    {pet ? (
                        <>
                            <div className="content">
                                <div className="leftContent">
                                    <img src={pet.imageURL ? pet.imageURL : 'faind.jpg'} alt={pet?.name} />
                                </div>

                                <div className="rightContent">
                                    <h1>
                                        {pet.name} - {pet.status}
                                    </h1>
                                    <p><i className="uil uil-map-marker"></i> Localizado em {pet?.locale}</p>

                                    <p>Quem é {pet.name}? <br /> {pet?.description}</p>

                                    <div className="link">
                                        <a
                                            href={`https://api.whatsapp.com/send/?phone=${pet?.contact}&text=Olá%2C+tudo+bom%3F+Vim+do+FindYourPet+e+estou+interessada+em+saber+mais+a+respeito+do+${pet.name}+que+está+no+anúncio+..`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="uil uil-whatsapp"></i> Entre em Contato!
                                        </a>

                                        <button onClick={() => { getLink(pet.slug) }} id="buttonON">
                                            <i className="uil uil-share-alt"></i> Compartilhe!
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <iframe width="100%" height="650px" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=${pet?.locale}&zoom=15&maptype=roadmap`}></iframe>
                        </>
                    ) : (
                        <div>Pet não encontrado.</div>
                    )}
                </SlugDetails>
            </PagesDetails>
            <Footer />
        </>
    )
}

export default PetSlugPage