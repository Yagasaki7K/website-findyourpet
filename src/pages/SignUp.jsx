import React from 'react'
import PetsDetails from '../components/PetsDetails'
import Footer from '../components/Footer'
import FormSignUpDetails from '../components/FormSignUpDetails'

import Logo from '../../assets/logo-white.png'

const SignUp = () => {
    return (
        <>
            <PetsDetails>
                <nav>
                    <a href="/signup">Perdi meu bichinho</a>
                    <a href="/signup">Encontrei um bichinho</a>
                    <a href="/pets"><img src={Logo} alt="Logo"/></a>
                    <a href="/signup">Quero adotar um animalzinho</a>
                    <a href="/maps">Localizar um animalzinho</a>
                </nav>

                <a href="/signup" className="advice-yellow">
                    <i className="uil uil-shield-exclamation"></i>&nbsp;
                        Procure colocar as informações corretamente - Não será possível editar posteriormente!
                    &nbsp;<i className="uil uil-shield-exclamation"></i>
                </a>
            </PetsDetails>

            <FormSignUpDetails>
                <form>
                    <h4>Nome do Animal</h4>
                    <input type="text" placeholder="Nome do Animalzinho" 
                    maxLength={15} size={30}/>

                    <h4>Foto do Animal</h4>
                    <input type="file" name="" id="" width={30}/>

                    <h4>Descrição do Animal</h4>
                    <textarea placeholder="Pelo branco, carinhoso, gosta de bolinhas" maxLength={50}
                    rows="4" cols="28"/>

                    <h4>Bairro/Cidade do Animal</h4>
                    <input type="text" placeholder="Bairro ou Cidade do Animalzinho" 
                    maxLength={20} size={30}/>

                    <h4>Tipo da Situação:</h4>
                    <select>
                        <option value="">Selecione</option>
                        <option value="adoption">Adoção</option>
                        <option value="findit">Encontrado</option>
                        <option value="lost">Perdido</option>
                    </select>

                    <h4>Telefone para contato</h4>
                    <input type="text" placeholder="Telefone para contato" 
                    maxLength={11} size={30}/>
                    
                    <div>
                        <button type="submit" className="send">Cadastrar</button> 
                        <button type="reset" className="reset">Limpar</button>
                    </div>
                </form>
            </FormSignUpDetails>
            
            <Footer/>
        </>
    )
}

export default SignUp