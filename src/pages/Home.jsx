import React, { useEffect } from 'react'
import AppDetails from '../components/AppDetails'
import AppBackground from '../components/AppBackground'
import Logo from '../../assets/logotipo-white.png'
import Modal from '../components/Modal'

function toHome() {
    window.location.href = "/pets"
}

const Home = () => {
    useEffect(() => {
        const sendPermissionRequestForNotification = async () => {
            let permission = await Notification.requestPermission()
                .then((result) => {
                    console.log('User choice', result)
                    if (result === 'granted') {
                        return
                    } else {
                        console.log('No notification permission granted!')
                    }
                })

            return permission
        }

        sendPermissionRequestForNotification()
    }, [])
    return (
        <>
            <AppBackground />
            <AppDetails>
                <ul>
                    <a href="/"><img src={Logo} /></a>
                    <li><a href="/sobre-nos">Sobre a Kalify</a></li>
                    <li><a href="/carreiras">Carreiras</a></li>
                    <li><a href="https://discord.gg/jhSepmE7nN" target="_blank" rel='noreferrer'>Suporte</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.kalifyinc.findyourpet&pli=1">Download</a></li>
                    <button onClick={() => toHome()}>Entrar</button>
                </ul>

                <div className="container">

                    <div className="content">
                        <div className="leftSide">
                            <h1>Encontre seu companheiro de estimação perfeito</h1>
                            <p>Procurando por um amigo de quatro patas? O FindYourPet ajuda você a encontrar e resgatar animais que precisam de um lar amoroso</p>

                            {/* <div className="newsletter">
                                <input type="text" placeholder='Insira seu email ...' />
                                <button>Enviar</button>
                            </div> */}

                            <button onClick={() => toHome()}>Entrar</button>

                            <div className="contact">
                                <div className="left-contact">
                                    <img src="https://storage.googleapis.com/mixo-files/public/img/avatars/male-19.png" alt="" />
                                </div>

                                <div className="right-contact">
                                    <h2>
                                        &quot;Encontrei meu melhor amigo através do FindYourPet. É uma plataforma incrível para amantes de animais de estimação.&quot;
                                    </h2>
                                    <h4>Pedro Guilherme</h4>
                                </div>


                            </div>
                        </div>

                        <div className="rightSide">
                            <svg width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>

                            <img src="../../assets/pet1.jpg" className="pet1" alt="" />
                        </div>
                    </div>

                    <div className="content">
                        <div className="leftSide">
                            <img src="../../assets/pet2.jpg" className="pet2" alt="" />
                        </div>

                        <div className="rightSide">
                            <h1>
                                Pesquisa fácil de animais de estimação
                            </h1>
                            <p>
                                FindYourPet facilita a busca de animais de estimação com base em suas preferências. Encontre o companheiro perfeito que corresponda ao seu estilo de vida e necessidades.
                            </p>
                        </div>
                    </div>

                    <div className="content">
                        <div className="leftSide">
                            <h1>
                                Resgatar e salvar vidas
                            </h1>
                            <p>
                                Ao usar o FindYourPet, você pode resgatar animais de estimação necessitados e dar-lhes uma segunda chance na vida. Faça a diferença e salve uma vida hoje.
                            </p>
                        </div>

                        <div className="rightSide">
                            <img src="../../assets/pet3.jpg" className="pet3" alt="" />
                        </div>
                    </div>

                    <div className="content">
                        <div className="leftSide">
                            <svg width="404" height="392" fill="none" viewBox="0 0 404 392"><defs><pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect></svg>
                            <img src="../../assets/pet4.jpg" className="pet4" alt="" />
                        </div>

                        <div className="rightSide">
                            <h1>
                                Apoie a adoção de animais de estimação
                            </h1>
                            <p>
                                FindYourPet promove a adoção de animais de estimação e apoia abrigos e organizações de resgate. Junte-se a nós para fornecer lares amorosos para animais de estimação necessitados.
                            </p>
                        </div>
                    </div>

                    <div className="advice">
                        <h1>
                            “FindYourPet me ajudou a resgatar um cachorro que foi abandonado.
                            Sou grato por esta plataforma e pela oportunidade de dar a ele um lar amoroso.”
                        </h1>

                        <div className="client">
                            <img src="https://storage.googleapis.com/mixo-files/public/img/avatars/male-31.png" alt="" />
                            <h4>Vinicius de Oliveira</h4>
                        </div>
                    </div>

                    <div className="joinUs">
                        <div className="content">
                            <h1>
                                Junte-se à nossa comunidade de amantes de animais de estimação e faça a diferença<span>.</span>
                            </h1>

                            <i>“Graças ao FindYourPet, encontrei meu companheiro de estimação perfeito e também contribuí para a missão de salvar animais. É uma situação ganha-ganha.” - Bruna dos Santos</i>

                            <button onClick={() => toHome()}>Entrar</button>
                        </div>
                    </div>

                    <div className="links">
                        <div className="url">
                            <a href="https://kalify.vercel.app/termos">Termos de Uso</a>&nbsp; - &nbsp;
                            <a href="https://kalify.vercel.app/politicas">Políticas de Privacidade</a>
                        </div>

                        <p>© 2022 - {new Date().getFullYear()} <a href="/">FindYourPet</a> by <a href="https://kalifyinc.vercel.app/" target="_blank" rel="noreferrer">Kalify Inc.</a> | Todas as imagens dos animais são de propriedade de seus devidos anunciantes</p>
                    </div>
                </div>
            </AppDetails>
            <Modal />
        </>
    )
}

export default Home
