import Head from 'next/head'
import Navigation from '../src/components/Navigation'
import HomeDetails from '../src/components/HomeDetails'
import Footer from '../src/components/Footer'
import { useEffect, useState } from 'react'
import petServices from '../src/services/pet.services'
import { getLabelColorBasedOnStatus } from '../src/utils/getLabelColorBasedOnStatus'

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
                        <h3><span>Encontre seu Pet.</span> <br /> Juntos na Busca por Nossos Pets Perdidos em todo o Brasil</h3>
                        <p>
                            Após o recente acidente no Rio Grande do Sul, 'FindYourPet' conecta pets perdidos a suas famílias. Adicione fotos do seu amigo desaparecido ou ajude reconhecendo pets encontrados por abrigos e voluntários. Vamos reunir cada animal com seu lar.
                        </p>

                        <div className="button" onClick={redirectToHome}>
                            <div className="icon">
                                <i className="uil uil-search"></i>
                            </div>
                            <div className="text">
                                <h4>Achar meu pet</h4>
                                <p>Reportar um pet perdido</p>
                            </div>
                        </div>

                        <div className="button2" onClick={redirectToReport}>
                            <div className="icon">
                                <i className="uil uil-map-marker"></i>
                            </div>
                            <div className="text">
                                <h4>Cadastrar um pet</h4>
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
                        <img src="/howtowork.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h2>Como funciona?</h2>

                        <p>O site oferece uma base de dados abrangente de animais perdidos, animais resgatados e em adoção, compilados a partir de informações fornecidas por instituições e ONGs dedicadas ao bem-estar animal, bem como usuários comuns. Com recursos de busca avançada e filtros específicos, tornamos mais fácil para os donos encontrar seus animais perdidos e para aqueles que encontraram animais perdidos localizar seus donos.</p>

                        <p>"FindYourPet" é mais do que uma plataforma, é uma comunidade unida pelo amor aos animais e pelo desejo de ajudar uns aos outros em momentos de dificuldade.</p>
                    </div>
                </div>

                <div className="findYourPet">
                    <h2>Banco de Pets</h2>
                    <p>Aqui você encontra os pets perdidos, em adoção e encontrados</p>

                    <div className="container">
                        {
                            Pets && Pets.slice(0, 4).map((pets, index) => (
                                <a href="/pets" key={index}>
                                    <div className="content">
                                        <div className="image">
                                            <img src={pets.imageURL ? pets.imageURL : '/faind.jpg'} alt={pets.name} />
                                        </div>

                                        <div className="text">
                                            <p style={{ backgroundColor: "#3dcf9a" }} >
                                                {pets.name}
                                            </p>

                                            <p style={{ backgroundColor: getLabelColorBasedOnStatus(pets.status) }} >
                                                {pets.status} - {pets.createdAt}
                                            </p>

                                            <p>
                                                {pets.locale}
                                            </p>
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
                        <img src="/girllooking.png" alt="" />
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
                        <img src="/smilingbaby.png" alt="" />
                    </div>
                    <div className="rightContent">
                        <h2>Tenha seu pet de volta</h2>
                        <button onClick={redirectToReport}>Reportar agora</button>
                    </div>
                </div>

                <div className="hotdog">
                    <img src="/hotdog.png" alt="Cachorro Salsicha" />
                </div>

                <div className="painel green">
                    <img src="/littlelogo.png" alt="pet" />

                    <h1>Faça a Diferença na Vida de um Pet</h1>

                    <p>Não espere mais! Se você encontrou um pet perdido, cadastre-o aqui e ajude-nos a reconectá-lo com sua família. Cada ação sua traz esperança. Clique no botão abaixo para começar a fazer a diferença agora mesmo.</p>

                    <button onClick={() => window.location.href = '/reporte'}>Cadastrar mais <i className="uil uil-angle-right"></i></button>
                </div>

                <div className="painel white">
                    <h1>Explore Mais Opções</h1>

                    <p>Se você ainda não encontrou seu pet em nosso site, recomendamos explorar outras plataformas de resgate. Continuar a busca aumenta as chances de reencontro. Não desista!</p>
                </div>
            </HomeDetails>
            <Footer />
        </>
    )
}
