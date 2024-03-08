import styled from 'styled-components'
import React from 'react'

const Navigation = () => {
    function redirectToHome() {
        window.location.href = '/pets'
    }

    return (
        <NavigationDetails>
            <h4><a href="/">FindYourPet</a></h4>

            <div className="menu">
                <li><a href="/#howWorks">Como Funciona?</a></li>
                <li><a href="/pets">Achados & Perdidos</a></li>
                <li><a href="/mapa">Mapa</a></li>
                <li><a href="#">Artigos</a></li>
                <li><a href="#">Contato</a></li>
                <button onClick={redirectToHome}>Entre</button>
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
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.2);
    background: var(--background);

    h4 {
        font-size: 1.8rem;
        color: var(--green);
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
            color: var(--green);
            font-size: 1.2rem;
            transition: 1s;

            &:hover {
                color: var(--green-alt);
            }

            @media (max-width: 1024px) {
                font-size: 0.9rem;
                margin-right: 1rem;
            }

            @media (max-width: 768px) {
                display: none;
            }
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