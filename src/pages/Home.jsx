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
                    <button onClick={() => toHome()}>Acessar</button>
                </ul>

                <div className="container">

                    <h1>Ajude um <span className="love">PET</span> <br /> a achar seu lar</h1>
                    <button onClick={() => toHome()}>Acessar</button>


                    <div className="links">
                        <a href="/termos">Termos de Uso</a> - &nbsp;
                        <a href="/politicas">Políticas de Privacidade</a>
                    </div>
                </div>
            </AppDetails>
            <Modal />
        </>
    )
}

export default Home
