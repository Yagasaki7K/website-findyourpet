import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'

const Carreiras = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h2>Carreiras</h2>
            <p>
                Nossa equipe da FindYourPet é administrada pela Kalify Inc. uma organização
                que visa solucionar problemas do cotidiano através da tecnologia e auxiliar
                a sociedade com soluções web. <br /><br /> Ficou interessado e quer trabalhar com a FindYourPet? Sempre temos vagas
                voluntárias - até o presente momento - para ajudar nossa aplicação a subir
                e evoluir. Como atualmente não contamos com patrocinadores e não temos
                nenhum plano de anúncio ou qualquer outro tipo de coisa que gere renda, nós
                pedimos doações para ajudar o projeto a continuar funcionando. <br /> <br />Com isso, os serviços ao redor desse projeto são de cunhos gratuitos e de
                mega importância para auxiliar e diminuir o impacto sobre animais perdidos,
                animais sem dono e animais que estão em doação, mas com a pouca divulgação,
                fica difícil disso acontecer. <br /> <br />
                Se você tem conhecimento e acredita que pode ajudar nosso projeto a evoluir, você
                pode acessar nosso <a href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank" rel="noreferrer">repositório no Github</a>, abrir um FORK - copiar o projeto para a sua conta - subir a atualização que precisamos e abrir um PR - pull request - nós iremos
                avaliar ela e se for de total importância e qualidade para o projeto, você será
                citado como um dos contribuidores. <br /> <br />
            </p>
        </SubPages>
    )
}

export default Carreiras
