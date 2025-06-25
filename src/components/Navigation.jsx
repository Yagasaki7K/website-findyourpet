import styled from 'styled-components'
import React from 'react'

const Navigation = () => {

    function redirectToHome() {
        window.location.href = '/reporte'
    }

    return (
        <NavigationDetails>
            <a href="/"><img src="/logotipo-100px.png" alt="logo" /></a>

            <div className="menu">
                <li><a href="/pets" className="active">Banco de Pets</a></li>
                <li><a href="/#howWorks">Como Funciona?</a></li>
                <li><a href="/mapa">Mapa</a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=5519998018174&text=Ol%C3%A1+preciso+de+ajuda+com+o+FindYourPet&type=phone_number&app_absent=0">Contato</a></li>
                <li><a href="https://blog-findyourpet.vercel.app/blog" target="_blank" rel="noreferrer">Blog <i className="uil uil-external-link-alt"></i></a></li>

                <button onClick={redirectToHome}>Cadastrar <i className="uil uil-signout"></i></button>
            </div>
        </NavigationDetails>
    )
}

export default Navigation

const NavigationDetails = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4rem;
    background: var(--background);

    img {
        width: 25rem;
        padding: 1rem;
    }

    @media (max-width: 768px){
        margin-left: -2rem;
    }

    .menu {
        display: flex;
        align-items: center;

        li {
            list-style: none;
            margin-right: 2.5rem;
            color: var(--green-alt);
            font-size: 1.2rem;
            transition: 1s;

            &:hover {
                color: var(--green);
            }

            @media (max-width: 1024px) {
                font-size: 0.9rem;
                margin-right: 1rem;
            }

            @media (max-width: 768px) {
                display: none;
            }
        }

        .active {
            color: var(--green);
        }

        button {
            margin-left: 1rem;
            background: var(--green);
            color: var(--white);
            border-radius: 15px;
            border: none;
            padding: 1rem 3rem;
            font-size: 1rem;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            text-transform: uppercase;
            transition: 1s;
            cursor: pointer;

            &:hover {
                background: var(--green-alt);
            }
        }
    }
`