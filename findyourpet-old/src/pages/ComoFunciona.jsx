import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import AddPetButton from '../components/AddPetButton'
import SubPages from '../components/SubPages'
import Footer from '../components/Footer'

const ComoFunciona = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h2>Como Funciona?</h2>
            <p>
                O aplicativo é simples: O que você precisa fazer é ir até a parte de <a href="/cadastro">cadastro</a> ou clicar no botão de [+]
                ao lado direito e você será redirecionado. Ao chegar na parte de cadastro, você deverá informar o nome do animal, você poderá deixar apenas
                cachorro, gato ou qualquer outro animal para caso de você acabar de resgatar ele e não souber o nome. Na parte de descrição, você descreva ele, usando as caracteristicas do bichinho, mas seja curto e rápido
            </p>
            <br />
            <p>
                Coloque uma imagem do seu animalzinho encontrado, perdido ou em adoção. Qualquer imagem que represente
                qualquer outra coisa fora do gênero será retirado da plataforma e a publicação será deletada. Tenha bom senso
                e use uma boa iluminação. Na parte de tipo, você deverá informar apenas uma das três categorias: Ele é um animal encontrado,
                um animal perdido ou um animal em adoção? Vale lembrar que não aceitamos vendas de animais em
                nossa plataforma em hipótese alguma. Por isso, qualquer ato do gênero, será deletado!
            </p>
            <br />
            <p>
                Na parte de localização, informe o bairro em que ele foi encontrado, assim a pessoa conseguirá
                ter noção da distância. Jamais coloque seu endereço físico, não nos responsabilizamos por qualquer
                problema envolvendo esse tipo de informação. E deixe um contato, através do telefone que a pessoa entrará em contato com você para saber mais
                sobre o animalzinho, tome cuidado com as informações compartilhadas e seja cauteloso para não
                ser vítima de qualquer golpe ou ato de má fé.
            </p>
            <br />
            <p>
                Após isso, é só enviar o formulário que nosso sistema irá analisar e fazer a publicação
                automaticamente para todos os usuários que estiverem acessando o website.
            </p>
            <AddPetButton />
            <Footer />
        </SubPages>
    )
}

export default ComoFunciona
