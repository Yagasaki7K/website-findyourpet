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
                a sociedade com soluções web.
            </p>
            <p>
                Ficou interessado e quer trabalhar com a FindYourPet? Sempre temos vagas
                voluntárias - até o presente momento - para ajudar nossa aplicação a subir
                e evoluir. Como atualmente não contamos com patrocinadores e não temos
                nenhum plano de anúncio ou qualquer outro tipo de coisa que gere renda, nós
                pedimos doações para ajudar o projeto a continuar funcionando.
            </p>
            <p>
                Com isso, os serviços ao redor desse projeto são de cunhos gratuitos e de 
                mega importância para auxiliar e diminuir o impacto sobre animais perdidos,
                animais sem dono e animais que estão em doação, mas com a pouca divulgação,
                fica difícil disso acontecer.
            </p>
            <p>
                Atualmente nossa lista de processos que precisamos e contamos ter futuramente
                para ajudar o projeto a crescer e posteriormente esses itens possam ser
                atualizados e incrementado aos poucos, é:
            </p>
            <ul>
                <li>Mapbox com marcações no GPS para cada caso animal</li>
                <li>Marcações com informações em card para contato</li>
                <li>Fotos alinhadas com o Firebase para ilustração do animal</li>
                <li>Analise sobre a UX/UI da plataforma</li>
                <li>Adicionar novas features que impactem e façam sentido ao projeto</li>
                <li>Sistema de exclusão do item - depois de dez dias adicionado</li>
                <li>Paginação depois de cerca quantidade de animais em tela</li>
                <li>Separar animais por categorias: gatos, cachorros, etc</li>
                <li>Criar um aplicativo mobile e aumentar o alcance e usabilidade</li>
            </ul>
            <p>
                Se você tem conhecimento e acredita que pode ajudar nosso projeto a evoluir, você
                pode acessar nosso <a href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank">repositório no Github</a>, abrir um FORK - copiar o projeto para a sua
                conta - subir a atualização que precisamos e abrir um PR - pull request - nós iremos
                avaliar ela e se for de total importância e qualidade para o projeto, você será
                citado como um dos contribuidores. 
            </p>
        </SubPages>
    )
}

export default Carreiras