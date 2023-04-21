import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'

const Termos = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h2>Termos de Uso</h2>
            <p>
                O FindYourPet é um aplicativo que visa ajudar os usuários a encontrar seus animais de estimação perdidos. Ao utilizar este aplicativo, você concorda com os seguintes termos de uso:
                <br /><br />
                <b>Conta de usuário</b><br />
                Para utilizar o FindYourPet, os usuários NÃO devem criar uma conta, mas devem fornecer informações atualizadas como número de telefone. Os usuários são responsáveis por manter a confidencialidade de sua localização e são responsáveis por todas as atividades realizadas em conversa através do número de telefone.
                <br /><br />
                <b>Uso do aplicativo</b><br />
                Os usuários concordam em usar o FindYourPet apenas para fins legais e não para fins fraudulentos, maliciosos ou ilegais. Os usuários também concordam em não acessar ou tentar acessar áreas restritas do aplicativo, sem autorização prévia.
                <br /><br />
                <b>Responsabilidade pelo conteúdo</b><br />
                Os usuários são responsáveis pelo conteúdo que publicam no FindYourPet, incluindo fotos, descrições e outras informações relacionadas a animais perdidos, encontrados ou adoções. Os usuários devem garantir que todas as informações fornecidas sejam precisas e atualizadas. O FindYourPet não se responsabiliza pelo conteúdo postado pelos usuários.
                <br /><br />
                <b>Propriedade intelectual</b><br />
                O FindYourPet é protegido por direitos autorais e outras leis de propriedade intelectual. Os usuários concordam em não copiar, reproduzir ou distribuir o aplicativo ou qualquer conteúdo do aplicativo sem autorização prévia.
                <br /><br />
                <b>Limitação de responsabilidade</b><br />
                O FindYourPet não se responsabiliza por quaisquer danos, diretos ou indiretos, resultantes do uso do aplicativo. Os usuários usam o aplicativo por sua própria conta e risco.
                <br /><br />
                <b>Alterações nos termos de uso</b><br />
                O FindYourPet reserva-se o direito de alterar estes termos de uso a qualquer momento, sem aviso prévio. Recomendamos que os usuários revisem periodicamente estes termos de uso para se manterem informados sobre as condições de uso do aplicativo.
                <br /><br />
                <b>Contato</b><br />
                Se os usuários tiverem alguma dúvida ou preocupação em relação aos termos de uso do FindYourPet, podem entrar em contato conosco através do e-mail de suporte do aplicativo.
                <br /><br />
                Estes termos de uso foram atualizados em 21 de Abril de 2023.
            </p>
        </SubPages>
    )
}

export default Termos
