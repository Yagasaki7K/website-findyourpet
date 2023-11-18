import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'
import Footer from '../components/Footer'
import AddPetButton from '../components/AddPetButton'
import AppDetails from '../components/AppDetails'

const SobreNos = () => {
    return (
        <>
            <AppDetails style={{backgroundColor: "#3c3c3db8"}}>
                <ul>
                    <a href="/"><img src={Logo} /></a>
                    <li><a href="/sobre-nos">Sobre a Kalify</a></li>
                    <li><a href="/carreiras">Carreiras</a></li>
                    <li><a href="https://discord.gg/jhSepmE7nN" target="_blank" rel='noreferrer'>Suporte</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1">Download</a></li>
                    <button onClick={() => toHome()}>Entrar</button>
                </ul>
            </AppDetails>
            <SubPages>
                <div className="container">
                    <div className="content">
                        <h2>Sobre Nós</h2>
                        <p>
                            Somos um aplicativo de auxilio animal, seja para encontrar animais perdidos,
                            informar animais que foram encontrados ou até mesmo anunciar animais em
                            doação. NÃO ACEITAMOS QUALQUER TIPO DE VENDA DE ANIMAIS.
                        </p>
                        <br />
                        <p>
                            O aplicativo é mantido pela equipe de desenvolvimento da Kalify Inc. e é
                            um projeto que atualmente se encontra open source - qualquer desenvolvedor
                            pode ajudar a fazer melhorias no projeto, seja por adicionar novas features
                            ou por qualquer outra forma que agregue ao projeto.
                        </p>
                        <br />
                        <p>
                            Se você não for um desenvolvedor e quer ajudar ao projeto, você pode entrar
                            em contato através do <a href="mailto:kalifyinc@gmail.com">e-mail</a> solicitando uma feature ou uma
                            implementação ou através de nosso <a href="https://discord.gg/jhSepmE7nN" target="_blank" rel="noreferrer">Discord</a>. Se a ideia for de fato importante para nós, você será creditado
                            em nossa página do Github para que outros possam ver a contribuição que fez com
                            o projeto e isso é de suma importância para a comunidade de desenvolvimento,
                            como também para nós e claro, outros usuários que estejam utilizando
                            e usufruindo da plataforma.
                        </p>
                        <br />
                        <p>
                            Nossa intenção é ajudar em solucionar uma dor que atualmente temos na sociedade,
                            o número de animais perdidos só aumentam e a falta de comunicação em respeito disso
                            é escasso, recorremos ao Facebook, Instagram e Whatsapp e quase nunca somos contatados
                            como queremos. A falta de informação de onde está, o que aconteceu, as caracteristicas
                            do animalzinho, é raro a falta de interesse sobre isso e soltar esse tipo de informação
                            para todas as redes sociais, sem de uma forma centralizar isso apenas dificulta.
                        </p>
                        <br />
                        <p>
                            Pensando nesse problema, criamos a FindYourPet - do inglês, encontre seu animal -
                            para que você possa relatar sobre o seu animal ou um animal que viu com mais
                            facilidade, de uma forma centralizada, gratuita e com uma imensa facilidade de
                            acesso, que é a internet.
                        </p>
                        <br />
                    </div>
                </div>
                
                <AddPetButton />
                <Footer />
            </SubPages>
        </>
    )
}

export default SobreNos
