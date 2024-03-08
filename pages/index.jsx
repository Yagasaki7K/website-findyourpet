import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import HomeDetails from '../src/components/HomeDetails'
import Footer from '../src/components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>FindYourPet | Ajudando Animais de Estimação A Encontrarem O Seu Lar</title>
                <meta name="description" content="" />
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
            </Head>
            <Navigation />
            <HomeDetails>
                <div className="helping">
                    <div className="leftContent">
                        <h3>Ajudando animais de estimação a encontrar o seu caminho</h3>
                        <p>
                            Nossa missão é reunir animais de estimação perdidos com suas famílias. Estamos empenhados em promover conexões, garantindo que cada animal de estimação perdido encontre o caminho de volta para casa.
                        </p>

                        <div className="button">
                            <div className="icon">
                                <i className="uil uil-search"></i>
                            </div>
                            <div className="text">
                                <h4>Perdi meu pet</h4>
                                <p>Reportar um pet perdido</p>
                            </div>
                        </div>

                        <div className="button2">
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

                <div className="howWorks">
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
                        <div className="content">
                            <div className="image">
                                <img src="/faind.jpg" alt="" />
                            </div>

                            <div className="text">
                                <p>Faind</p>
                                <p>13.03.2024</p>
                                <p>Campinas, São Paulo</p>
                            </div>
                        </div>

                        <div className="content">
                            <div className="image">
                                <img src="/faind.jpg" alt="" />
                            </div>

                            <div className="text">
                                <p>Faind</p>
                                <p>13.03.2024</p>
                                <p>Campinas, São Paulo</p>
                            </div>
                        </div>

                        <div className="content">
                            <div className="image">
                                <img src="/faind.jpg" alt="" />
                            </div>

                            <div className="text">
                                <p>Faind</p>
                                <p>13.03.2024</p>
                                <p>Campinas, São Paulo</p>
                            </div>
                        </div>

                        <div className="content">
                            <div className="image">
                                <img src="/faind.jpg" alt="" />
                            </div>

                            <div className="text">
                                <p>Faind</p>
                                <p>13.03.2024</p>
                                <p>Campinas, São Paulo</p>
                            </div>
                        </div>
                    </div>

                    <button>Veja mais</button>
                </div>

                <div className="maps">
                    <div className="leftContent">
                        <img src="/question-mark.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h1>Confira animais e abrigos relatados no mapa</h1>
                        <p>Explore um mapa ao vivo com animais de estimação perdidos e encontrados, bem como abrigos de animais locais. <br />
                            Descubra uma rede de apoio para ajudar animais de estimação necessitados e ajudá-los a encontrar o caminho de casa!</p>
                        <button>Veja no mapa</button>
                    </div>
                </div>

                <div className="petBack">
                    <div className="leftContent">
                        <img src="/cat.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h2>Tenha seu pet de volta</h2>
                        <button>Reportar agora</button>
                    </div>
                </div>

                <div className="blog">
                    <h1>Artigos e mais ...</h1>
                    <p>Sua fonte preferida de artigos, dicas e conselhos sobre animais de estimação perdidos e achados, cuidados com animais de estimação e muito mais.</p>

                    <div className="container">
                        <a href="#">
                            <div className="card">
                                <img src="/faind.jpg" alt="" />
                                <div className="content">
                                    <h4>Perdi meu animalzinho - O que eu faço?</h4>
                                    <p>Seu guia completo para agir e se reunir com seu querido amigo peludo. Tudo que você precisa saber e como reportar no FindYourPet em primeira mão ...</p>

                                    <div className="bottom-content">
                                        <p>13.03.2024</p>
                                        <button>Veja mais</button>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#">
                            <div className="card">
                                <img src="/faind.jpg" alt="" />
                                <div className="content">
                                    <h4>Perdi meu animalzinho - O que eu faço?</h4>
                                    <p>Seu guia completo para agir e se reunir com seu querido amigo peludo. Tudo que você precisa saber e como reportar no FindYourPet em primeira mão ...</p>

                                    <div className="bottom-content">
                                        <p>13.03.2024</p>
                                        <button>Veja mais</button>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#">
                            <div className="card">
                                <div className="image">
                                    <img src="/faind.jpg" alt="" />
                                </div>

                                <div className="content">
                                    <h4>Perdi meu animalzinho - O que eu faço?</h4>
                                    <p>Seu guia completo para agir e se reunir com seu querido amigo peludo. Tudo que você precisa saber e como reportar no FindYourPet em primeira mão ...</p>

                                    <div className="bottom-content">
                                        <p>13.03.2024</p>
                                        <button>Veja mais</button>
                                    </div>
                                </div>
                            </div>
                        </a>
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
