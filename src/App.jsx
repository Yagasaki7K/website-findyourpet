import React from "react";

import LogoWhite from '/assets/logo-white.png'
import LogotipoWhite from '/assets/logotipo-white.png'
import Petlook from '/assets/petlook.png'
import "./App.css";

const App = () => {
    return (
        <>
            <div className="App">
                <div className="logo">
                    <a href="/"><img src={LogoWhite} alt="Logo" /></a>
                </div>

                <div className="container">
                    <div className="content">
                        <a href="/"><img src={LogotipoWhite} alt="Logotipo" className="logotipo" /></a>
                        <h1>Um app para te ajudar a encontrar, resgatar e doar seus pets com amor!</h1>
                        <h3>Um mundo melhor para nossos bichinhos</h3>

                        <div className="socialmedia">
                            <a href="/pets">
                                <button className="ActionLogin">
                                <i className="uil uil-signin"></i> Acessar
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="imgright">
                        <img src={Petlook}></img>
                    </div>

                </div>

                <div className="howtoworks">
                    <h1>🤔 Como funciona? 🤔</h1>
                </div>

                <div className="text">
                    <h3>🐶 - Eu perdi meu cachorro!</h3>
                    <p>
                        Você entra no aplicativo - gratuitamente - vá na área de animais perdidos,
                        lá você consegue cadastrar um novo pet para que outros saibam que você
                        está procurando seu bichinho. Preencha informações como o tipo de animal
                        que ele é, a cor, tamanho, nome, a última localização e informações para
                        contato, em breve alguém irá te avisar a respeito do seu bichinho!
                    </p>

                    <h3>🐱 - Eu encontrei um gato!</h3>
                    <p>
                        Você entra no aplicativo - gratuitamente - vá na área de animais perdidos,
                        lá você consegue encontrar pessoas que estão procurando por bichinhos perdidos,
                        assim, você clica no animal que aparenta ser ele ou cadastra um novo,
                        baseado nas informações de lugares onde ele foi encontrado, a descrição do
                        bichinho e as demais informações, assim você consegue entrar em contato
                        com o dono ou o dono com você, vocês se alinham sobre como
                        devolver o mascote para a família e pronto! Tudo está resolvido!
                    </p>

                    <h3>🐰 - Quero fazer uma adoção/adotar um animalzinho!</h3>
                    <p>
                        Você entra no aplicativo - gratuitamente - vá na área de adoções, e lá
                        você encontrará tanto pessoas que queiram adotar um bichinho, tanto
                        quanto aqueles que estão adotando um que acabou de nascer ou algo do tipo.
                        Entre em contato com a pessoa a respeito do animalzinho que você está doando
                        ou que está procurando, alinhem-se e tudo está resolvido, mais um animalzinho que terá
                        um novo lar para chamar de seu!
                    </p>

                    <hr></hr>

                    <h3>⚠️ - Avisos sobre o aplicativo</h3>
                    <p>
                        Vale lembrar que a <a href="/">FindYourPet</a> é um aplicativo idealizado, manutenido e em funcionamento
                        pela <a href="https://kalify.netlify.com" target="_blank" rel="noreferrer">Kalify Inc</a>, uma equipe de desenvolvedores que visam a construção de aplicativos para ajudar a sociedade.
                    </p>

                    <p>
                        Nós não responsabilizamos por qualquer tipo de dano que possa causar
                        aos usuários do aplicativo como roubos ou golpes, por favor, verifique
                        as informações corretamente e em caso de emergência, <b>ligue 190</b>.
                    </p>

                    <p>
                        Em caso de vendas de animais, por favor, entre em contato com
                        a <a href="https://kalify.vercel.app" target="_blank" rel="noreferrer">Kalify Inc</a> através do <a href="mailto:kalifyinc@gmail.com">e-mail</a> ou nosso <a href="https://discord.gg/CFhzRE6ztp" target="_blank">servidor no Discord</a> que
                        estaremos retirando o anúncio do ar imediatamente. Adotar é muito melhor! 🤍
                    </p>

                    <hr></hr>

                    <div className="copyright">
                        <i> © 2018 - {new Date().getFullYear()} - Kalify Inc |
                            © {new Date().getFullYear()} - FindYourPet</i>
                    </div>
                </div>

                <footer>

                </footer>
            </div>
        </>
    );
}

export default App;