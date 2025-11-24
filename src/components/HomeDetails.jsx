import styled from "styled-components";

const HomeDetails = styled.div`
    .helping {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: min(1200px, 100% - 2.5rem);
        margin: 4rem auto;
        padding: clamp(1.5rem, 3vw, 3rem);
        gap: clamp(2rem, 4vw, 5rem);

        .leftContent {
            flex: 1 1 20rem;
            max-width: 720px;
            padding-left: clamp(0.5rem, 4vw, 4rem);
            padding-right: clamp(0.5rem, 2vw, 2rem);

            @media (max-width: 1024px) {
                padding-left: 0;
                padding-right: 0;
            }

            h3 {
                font-size: clamp(2.2rem, 3vw, 3rem);
                color: var(--black);
                margin-bottom: 1.5rem;

                span {
                    color: var(--green);
                }
            }

            p {
                font-size: clamp(1rem, 1.4vw, 1.25rem);
                margin-bottom: 1.5rem;

                @media (max-width: 768px){
                    width: 100%;
                }
            }

            .button, .button2 {
                display: flex;
                width: min(20rem, 100%);
                height: 5rem;
                padding: 0.3rem 2rem 0.3rem 1rem;
                cursor: pointer;

                &:hover {
                    transition: 1s;
                }

                .icon {
                    i {
                        font-size: 3rem;
                    }
                }

                .text {
                    margin-top: -1rem;
                    margin-left: 1rem;

                    h4 {
                        font-size: 1.2rem;
                        margin-bottom: 0;

                        @media (max-width: 768px){
                            margin-top: 1.2rem;
                        }
                    }

                    p {
                        margin-top: 0;
                        font-size: 0.8rem;
                    }
                }
            }

            .button {
                background: var(--green-light);
                color: var(--green);
                margin-bottom: 1rem;

                &:hover {
                    background: var(--green);
                    color: var(--green-light);
                }
            }

            .button2 {
                background: var(--green);
                color: var(--green-light);

                &:hover {
                    background: var(--green-light);
                    color: var(--green);
                }
            }
        }

        .rightContent {
            flex: 1 1 18rem;
            display: flex;
            justify-content: center;

            img {
                margin-top: clamp(-6rem, -4vw, -2rem);
                width: clamp(18rem, 38vw, 32rem);

                @media (max-width: 1024px) {
                    width: clamp(16rem, 60vw, 28rem);
                    margin-top: -2rem;
                }

                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
    }

    .howWorks {
        display: flex;
        justify-content: center;
        align-items: center;
        width: min(1200px, 100% - 2.5rem);
        margin: 5rem auto 4rem;
        gap: clamp(2rem, 5vw, 6rem);

        @media (max-width: 1024px) {
            flex-wrap: wrap;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }

        .leftContent {
            img {
                width: clamp(18rem, 40vw, 30rem);
                margin-right: 0;

                @media (max-width: 768px) {
                    width: clamp(16rem, 70vw, 22rem);
                }
            }
        }

        .rightContent {
            width: 100%;
            max-width: 40rem;

            @media (max-width: 768px) {
                margin-left: 0;
            }

            h2 {
                font-size: 2rem;
                color: var(--green);
            }

            p {
                list-style: none;
                margin-bottom: 1.2rem;
                font-size: 1.2rem;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;
                transition: 0.3s;
                display: flex;
                align-items: center;

                @media (max-width: 768px) {
                    width: 100%;
                }

                img {
                    margin-right: 1rem;
                    width: 3.5rem;
                }
            }
        }
    }

    .findYourPet {
        background: var(--green);
        background: linear-gradient(180deg, var(--green) 0%, var(--background) 100%);
        color: var(--white);
        padding: clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 4rem);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        h2 {
            font-size: 2rem;
            margin-bottom: -1rem;
            text-align: center;
        }

        p {
            font-size: 1.2rem;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: clamp(1.5rem, 3vw, 3rem);
            width: min(1300px, 100%);

            .content {
                cursor: pointer;
                width: min(18rem, 90vw);
                height: 25rem;

                @media (max-width: 1366px) {
                    height: auto;
                }

                &:hover {
                    .image {
                        img {
                            transition: 1s;
                            filter: brightness(80%);
                        }
                    }

                    .text {
                        p {
                            transition: 1s;
                            background: var(--green);
                        }
                    }
                }

                .image {
                    img {
                        width: 100%;
                        height: 25rem;
                        object-fit: cover;
                        border-radius: 15px;

                        @media (max-width: 1366px) {
                            height: 20rem;
                        }
                    }
                }

                .text {
                    position: relative;
                    z-index: 1;
                    width: 13rem;
                    margin-top: -9rem;
                    margin-left: 1rem;

                    p {
                        background: var(--green);
                        color: var(--white);
                        padding: 0.5rem;
                        text-align: center;
                        font-size: 0.9rem;
                        border-radius: 25px;
                        margin-top: 0;
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }

        button {
            background: var(--green-alt);
            color: var(--white);
            border: none;
            padding: 1rem 5rem;
            border-radius: 20px;
            font-size: 1.5rem;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            transition: 1s;
            margin-top: 2rem;

            &:hover {
                background: var(--green);
            }
        }
    }

    .maps {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8rem auto;
        flex-wrap: wrap;
        gap: clamp(2rem, 5vw, 6rem);
        width: min(1200px, 100% - 2.5rem);

        @media (max-width: 768px) {
            flex-direction: column;
        }

        .leftContent {
            display: flex;
            justify-content: center;
            width: 100%;

            img {
                width: clamp(20rem, 45vw, 32rem);
                margin: 0;
                background: var(--green-alt);
                padding: 2rem;
                border-radius: 15px;

                @media (max-width: 1024px) {
                    margin: 0;
                }
            }
        }

        .rightContent {
            width: 100%;
            max-width: 40rem;

            @media (max-width: 1024px) {
                padding: 0 2rem;
            }

            @media (max-width: 768px) {
                width: 100%;
                padding: 0;
            }

            h1 {
                font-size: 2.5rem;
                color: var(--green);
            }

            p {
                font-size: 1.2rem;
            }

            button {
                background: var(--green-alt);
                color: var(--white);
                border: none;
                padding: 1rem 4rem;
                border-radius: 15px;
                font-size: 1.5rem;
                font-weight: 600;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;
                transition: 1s;
                margin-top: 2rem;

                &:hover {
                    background: var(--green);
                }
            }
        }
    }

    .petBack {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem auto 2rem;
        background: var(--green-alt);
        padding: clamp(3rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
        gap: clamp(1.5rem, 4vw, 4rem);
        width: min(1200px, 100%);

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }

        .leftContent {
            padding: 0;

            img {
                width: clamp(18rem, 40vw, 24rem);
                margin-right: 0;

                @media (max-width: 768px) {
                    margin-right: 0;
                }
            }
        }

        .rightContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--white);
            background: var(--green-alt);

            h2 {
                font-size: 2.5rem;

                @media (max-width: 768px) {
                    text-align: center;
                    margin-top: -1rem;
                }
            }

            button {
                background: var(--green);
                color: var(--white);
                border: none;
                padding: 1rem 4rem;
                border-radius: 15px;
                font-size: 1.5rem;
                font-weight: 600;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;
                transition: 1s;

                @media (max-width: 768px) {
                    margin-bottom: 2rem;
                }

                &:hover {
                    background: var(--green-bubble);
                }
            }
        }
    }

    .hotdog {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 6rem 0;
        padding: 0 clamp(1rem, 4vw, 3rem);

        img {
            width: 25rem;

            @media (max-width: 768px) {
                width: 20rem;
            }
        }
    }

    .painel {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding: clamp(3rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
        width: 100%;

        p {
            width: min(50rem, 100%);
        }

        button {
            background: var(--white);
            color: var(--green-alt);
            border: none;
            padding: 1rem 2rem;
            border-radius: 15px;
            font-size: 1rem;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            transition: 1s;

            &:hover {
                background: var(--green-bubble);
                color: var(--white);
            }
        }
    }

    .white {
        background: var(--white);
        color: var(--green);
    }

    .green {
        background: var(--green-alt);
        color: var(--white);
    }
`;

export default HomeDetails;
