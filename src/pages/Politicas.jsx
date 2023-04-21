import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'

const Politicas = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h2>Políticas de Privacidade</h2>
            <p>
                O FindYourPet é um aplicativo que visa ajudar os usuários a encontrar seus animais de estimação perdidos. A privacidade e a segurança das informações dos usuários são fundamentais para nós. Nesta política de privacidade, explicamos como coletamos, usamos e protegemos as informações pessoais dos usuários.
                <br /><br />
                <b>Informações coletadas</b><br />
                Para utilizar o FindYourPet, os usuários NÃO precisam criar uma conta, mas precisam fornecer algumas informações pessoais, como número de telefone e um endereço aproximado em que foi reportado o animal, seja para adoção, resgate ou informar sobre o animal perdido. Além disso, os usuários podem optar por compartilhar informações adicionais sobre seus animais de estimação, como fotos, descrições, localização e outras informações relevantes para ajudar a encontrar seus animais perdidos.
                <br /><br />
                <b>Uso das informações</b><br />
                As informações fornecidas pelos usuários são usadas exclusivamente para fornecer o serviço do FindYourPet e ajudar na busca de animais de estimação perdidos. As informações dos usuários não serão compartilhadas com terceiros sem o seu consentimento expresso, exceto quando exigido por lei ou ordem judicial.
                <br /><br />
                <b>Proteção das informações</b><br />
                O FindYourPet adota medidas de segurança para proteger as informações dos usuários, como criptografia de dados e acesso restrito às informações do usuário.
                <br /><br />
                <b>Cookies</b><br />
                O FindYourPet NÃO utiliza cookies para melhorar a experiência do usuário.
                <br /><br />
                <b>Alterações na política de privacidade</b><br />
                O FindYourPet reserva-se o direito de alterar esta política de privacidade a qualquer momento, sem aviso prévio. Recomendamos que os usuários revisem periodicamente esta política de privacidade para se manterem informados sobre as práticas de privacidade do aplicativo.
                <br /><br />
                <b>Contato</b><br />
                Se os usuários tiverem alguma dúvida ou preocupação em relação à política de privacidade do FindYourPet, podem entrar em contato conosco através do e-mail de suporte do aplicativo.
                <br /><br />
                Esta política de privacidade foi atualizada em 21 de Abril de 2023.
            </p>
        </SubPages>
    )
}

export default Politicas
