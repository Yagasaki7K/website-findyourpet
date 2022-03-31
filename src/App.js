import './App.css';
import useEffect from 'react'

function App() {

    return (
        <>
            <div className="logo">
            <a href="#"><img src="/assets/logo.png" alt="Logo"/></a>
            </div>

            <div className="container">
                <div className="content">
                    <a href="#"><img src="/assets/logotipo.png" alt="Logotipo"/></a>
                    <h1>Um app para te ajudar a encontrar, informar e doar seus pets com amor!</h1>
                    <h3>Um mundo melhor para nossos bichinhos</h3>

                    <div className="socialmedia">
                        <a href="" className="btn-playstore">
                            <img src="/assets/googleplay.png" alt="Google Play"/>
                        </a>
                        <a href="" className="btn-applestore">
                            <img src="/assets/applestore.png" alt="Apple Store"/>
                        </a>
                    </div>
                </div>

                <div className="imgright">
                    <img src="/assets/petlook.png"></img>
                </div>
                
            </div>

            <div className="howtoworks">
                <h1>🤔 Como funciona? 🤔</h1>
            </div>

            <div className="text">
                <h3>🐶 - Eu perdi meu cachorro!</h3>
                <p>
                    Você entra no aplicativo, se cadastra, vá na área de animais perdidos,
                    lá você consegue cadastrar um novo pet para que outros saibam que você
                    está procurando seu bichinho. Preencha informações com o tipo de animal
                    que ele é, a cor, tamanho, nome, a última localização e informações para
                    contato, em breve alguém irá te informar que encontraram o seu bichinho!
                </p>

                <h3>🐱 - Eu encontrei um gato!</h3>
                <p>
                    Você entra no aplicativo, se cadastra, vá na área de animais perdidos,
                    lá você consegue encontrar pessoas que estão procurando por bichinhos perdidos,
                    assim, você clica no animal que aparenta ser ele, baseado nas informações de
                    lugares onde ele foi perdido, a descrição do bichinho e você consegue entrar
                    em contato com o dono. Você entrega ou ele vem buscar e tudo está resolvido!
                </p>

                <h3>🐰 - Quero fazer uma adoção/adotar um animalzinho!</h3>
                <p>
                    Você entra no aplicativo, se cadastra, vá na área de adoções, e lá
                    você encontrará tanto pessoas que queiram adotar um bichinho, tanto
                    quanto aqueles que estão adotando um que acabou de nascer ou algo do tipo.
                    Entre em contato com a pessoa a respeito do animalzinho que você está doando
                    ou que está procurando e tudo está resolvido, mais um animalzinho que terá
                    um novo lar para chamar de seu!
                </p>

                <hr></hr>

                <h3>⚠️ - Avisos sobre o aplicativo</h3>
                <p>
                    Vale lembrar que a <a href="#">FindYourPet</a> é um aplicativo idealizado, manutenido e em funcionamento
                    pela <a href="https://aperturelabs.netlify.com" target="_blank" rel="noreferrer">Aperture Laboratories</a> - comunidade
                    de desenvolvedores - em união com a <a href="https://kalify.netlify.com" target="_blank" rel="noreferrer">Kalify Inc</a>. 
                </p>
                
                <p>
                    Nós não responsabilizamos por qualquer tipo de dano que possa causar 
                    aos usuários do aplicativo como roubos ou golpes, por favor, verifique
                    as informações corretamente e em caso de emergência, <b>ligue 190</b>. 
                </p>
                
                <p>
                    Em caso de vendas de animais, por favor, entre em contato com 
                    a <a href="https://aperturelabs.netlify.com" target="_blank" rel="noreferrer">Aperture Laboratories</a> que 
                    estaremos retirando o anúncio do ar imediatamente. Adotar é muito melhor! 💜
                </p>

                <p>
                    Em caso de dúvidas ou se for necessário entrar em contato com o suporte, você poderá
                    usar o nosso <a href="https://discord.gg/nyTRNSV" target="_blank" rel="noreferrer">Discord</a>, 
                    nossa comunidade de desenvolvedores ou você pode entrar em contato através do&nbsp;
                    <a href="mailto:anderson18.marlon@gmail.com">E-mail do criador</a>
                </p>

                <hr></hr>

                <div className="copyright">
                    <i> © 2020 - {new Date().getFullYear()} - Aperture Laboratories | 
                        © 2018 - {new Date().getFullYear()} - Kalify Inc | 
                        © {new Date().getFullYear()} - FindYourPet</i>
                </div>
            </div>

            <footer>
                
            </footer>
        </>
    );
}

export default App;
