import React from 'react'

import Logo from '../../assets/logotipo-white.png'
import SubPages from '../components/SubPages'
import AddPetButton from '../components/AddPetButton'
import Footer from '../components/Footer'

const Download = () => {
    return (
        <SubPages>
            <a href="/pets"><img src={Logo} /></a>
            <h1>Download</h1>
            <a href="https://download1076.mediafire.com/com8sxa298igfi84RvbPrhAOWwoLcdfRNYrMEfqAzgqmktCGdj7a6rsxRnHd-8l-QUEGA1mm-wAu4EP93Tb0AjQMSiqy/mr7lvt7z2zmtzga/FindYourPet.apk">Clique aqui para baixar a versão do aplicativo para Android</a>

            <br /><br />
            <h2>Changelog</h2>
            <p>
                <strong>1.0.0</strong>
                <br />
                - Lançamento do aplicativo
            </p>
            <AddPetButton />
            <Footer />
        </SubPages>
    )
}

export default Download
