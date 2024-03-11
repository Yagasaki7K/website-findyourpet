import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import HomeDetails from '../src/components/HomeDetails'
import Footer from '../src/components/Footer'
import { useEffect, useState } from 'react'
import petServices from '../src/services/pet.services'

export default function Home() {
    function redirectToHome() {
        window.location.href = '/pets'
    }

    function redirectToReport() {
        window.location.href = '/reporte'
    }

    function redirectToMaps() {
        window.location.href = '/mapa'
    }

    const [Pets, setPets] = useState([])

    useEffect(() => {
        getPets()
    }, [])

    async function getPets() {
        const data = await petServices.getAllPets()
        setPets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>FindYourPet | Ajudando Animais de Estimação A Encontrarem O Seu Lar</title>
                <meta name="description" content="" />
            </Head>
            <Navigation />
            <HomeDetails>
                <div className="helping">
                    <div className="leftContent">
                        <h3>Ajudando animais de estimação a encontrar o seu caminho</h3>
                        <p>
                            Nossa missão é reunir animais de estimação perdidos com suas famílias. Estamos empenhados em promover conexões, garantindo que cada animal de estimação perdido encontre o caminho de volta para casa.
                        </p>

                        <div className="button" onClick={redirectToReport}>
                            <div className="icon">
                                <i className="uil uil-search"></i>
                            </div>
                            <div className="text">
                                <h4>Perdi meu pet</h4>
                                <p>Reportar um pet perdido</p>
                            </div>
                        </div>

                        <div className="button2" onClick={redirectToReport}>
                            <div className="icon">
                                <i className="uil uil-map-marker"></i>
                            </div>
                            <div className="text">
                                <h4>Achei um pet</h4>
                                <p>Reportar um pet encontrado</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightContent">
                        <img src="/dog.png" alt="" />
                    </div>
                </div>

                <div className="howWorks" id="howWorks">
                    <div className="leftContent">
                        <img src="/bird.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h2>Como funciona?</h2>

                        <li><img src="/01.png" alt="" />Informe um pet perdido, para adoção ou achado</li>
                        <li><img src="/02.png" alt="" />Alcance as pessoas em sua área</li>
                        <li><img src="/03.png" alt="" />Aguarde uma mensagem</li>
                        <li><img src="/04.png" alt="" />Pet de volta ao lar</li>
                    </div>
                </div>

                <div className="findYourPet">
                    <h2>Achados & Perdidos</h2>
                    <p>Aqui você encontra os pets perdidos, em adoção e achados</p>

                    <div className="container">
                        {
                            Pets && Pets.slice(0, 4).map((pets, index) => (
                                <a href="/pets" key={index}>
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
                            ))
                        }
                    </div>

                    <button onClick={redirectToHome}>Veja mais</button>
                </div>

                <div className="maps">
                    <div className="leftContent">
                        <img src="/question-mark.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h1>Confira animais e abrigos relatados no mapa</h1>
                        <p>Explore um mapa ao vivo com animais de estimação perdidos e encontrados, bem como abrigos de animais locais. <br />
                            Descubra uma rede de apoio para ajudar animais de estimação necessitados e ajudá-los a encontrar o caminho de casa!</p>
                        <button onClick={redirectToMaps}>Veja no mapa</button>
                    </div>
                </div>

                <div className="petBack">
                    <div className="leftContent">
                        <img src="/cat.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h2>Tenha seu pet de volta</h2>
                        <button onClick={redirectToReport}>Reportar agora</button>
                    </div>
                </div>

                <div className="blog">
                    <h1>Artigos e mais ...</h1>
                    <p>Sua fonte preferida de artigos, dicas e conselhos sobre animais de estimação perdidos e achados, cuidados com animais de estimação e muito mais.</p>

                    <div className="container">
                        <div className="container">
                            <a href="https://blog-findyourpet.vercel.app/blog/perdi-meu-animalzinho-o-que-fazer" target="_blank" rel="noreferrer">
                                <div className="card">
                                    <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className="content">
                                        <h4>Perdi meu animalzinho - O que eu faço?</h4>
                                        <p>Seu guia completo para agir e se reunir com seu querido amigo peludo. Tudo que você precisa saber e como reportar no FindYourPet em primeira mão ...</p>

                                        <div className="bottom-content">
                                            <p>11.03.2024</p>
                                            <button>Veja mais</button>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="https://blog-findyourpet.vercel.app/blog/perdi-meu-animalzinho-o-que-fazer" target="_blank" rel="noreferrer">
                                <div className="card">
                                    <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className="content">
                                        <h4>Perdi meu animalzinho - O que eu faço?</h4>
                                        <p>Seu guia completo para agir e se reunir com seu querido amigo peludo. Tudo que você precisa saber e como reportar no FindYourPet em primeira mão ...</p>

                                        <div className="bottom-content">
                                            <p>11.03.2024</p>
                                            <button>Veja mais</button>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="https://blog-findyourpet.vercel.app/blog/perdi-meu-animalzinho-o-que-fazer" target="_blank" rel="noreferrer">
                                <div className="card">
                                    <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className="content">
                                        <h4>Perdi meu animalzinho - O que eu faço?</h4>
                                        <p>Seu guia completo para agir e se reunir com seu querido amigo peludo. Tudo que você precisa saber e como reportar no FindYourPet em primeira mão ...</p>

                                        <div className="bottom-content">
                                            <p>11.03.2024</p>
                                            <button>Veja mais</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hotdog">
                    <img src="/hotdog.png" alt="Cachorro Salsicha" />
                </div>
            </HomeDetails>
            <Footer />
        </>
    )
}
