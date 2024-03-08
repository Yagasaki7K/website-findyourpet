import styled from 'styled-components'

const HomeDetails = styled.div`
    .helping {
        display: flex;
        justify-content: space-between;

        .leftContent {
            width: 40rem;
            padding-left: 4rem;

            h3 {
                font-size: 3rem;
                color: var(--green);
                margin-bottom: 1.5rem;
            }

            p {
                font-size: 1.25rem;
                margin-bottom: 1.5rem;
            }

            .button, .button2 {
                display: flex;
                width: 20rem;
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
            img {                
                margin-top: -10rem;
                width: 50rem;

                @media (max-width: 1024px) {
                    width: 35rem;
                }
            }
        }
    }

    .howWorks {
        display: flex;
        justify-content: center;
        margin-top: 10rem;
        margin-bottom: 2rem;

        .leftContent {
            img {
                width: 30rem;
                margin-right: 15rem;

                @media (max-width: 1024px) {
                    margin-right: 2rem;
                }
            }
        }

        .rightContent {
            h2 {
                font-size: 1.8rem;
            }

            li {
                list-style: none;
                margin-bottom: 1.2rem;
                font-size: 1.2rem;
                font-family: 'Poppins', sans-serif;
                cursor: pointer;
                transition: 0.3s;
                display: flex;
                align-items: center;

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
        padding: 2rem 4rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 2rem;
            margin-bottom: -1rem;
        }

        p {
            font-size: 1.2rem;
        }
        
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            .content {
                cursor: pointer;
                width: 15rem;
                height: 25rem;
                margin-right: 10rem;

                @media (max-width: 1366px) {
                    margin-right: 5rem;
                    margin-bottom: -4rem;
                    width: 14rem;
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
                        width: 22rem;
                        height: 25rem;
                        object-fit: cover;
                        border-radius: 15px;

                        @media (max-width: 1366px) {
                            width: 18rem;
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
                        background: var(--green-bubble);
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
            padding: 2rem 8rem;
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
        margin: 8rem 0;

        .leftContent {

            img {
                width: 14rem;
                margin: 0 10rem;

                @media (max-width: 1024px) {
                    margin: 0 5rem;
                }
            }
        }

        .rightContent {
            width: 40rem;

            @media (max-width: 1024px) {
                padding: 0 2rem;
            }

            h1 {
                font-size: 2.5rem;
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
        margin: 4rem 0 2rem 0;
        background: var(--green-alt);

        .leftContent {
            padding: 2rem 0;

            img {
                width: 16rem;
                margin-right: 5rem;
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
            }
        }
    }

    .blog {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 4rem;

        h1 {
            color: var(--green);
            font-size: 2.5rem;
        }

        p {
            margin-top: -2rem;
            width: 50rem;
            font-size: 1.2rem;
            color: var(--green);
        }

        .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            @media (max-width: 1024px) {
                flex-direction: column;
            }

            .card {
                width: 30rem;
                margin-right: 2rem;
                cursor: pointer;

                @media (max-width: 1366px) {
                    width: 20rem;
                    margin-right: 5rem;
                }

                &:hover {
                    .content {
                        background: var(--green);

                        .bottom-content {
                            button {
                                background: var(--green-bubble)
                            }
                        }
                    }
                }

                img, .content {
                    width: 30rem;

                    @media (max-width: 1366px) {
                        width: 22rem;
                    }

                    @media (max-width: 1024px) {
                        width: 20rem;
                    }
                }

                img {
                    height: 20rem;
                    object-fit: cover;
                    border-radius: 15px 15px 0 0;

                    @media (max-width: 1024px) {
                        margin-top: 2rem;
                    }
                }

                .content {
                    background: var(--green-alt);
                    padding: 1rem;
                    margin-top: -0.5rem;
                    border-radius: 0 0 15px 15px;
                    transition: 1s;

                    h4 {
                        font-size: 1.5rem;
                        color: var(--white);
                        margin-top: 0rem;
                    }

                    p {
                        color: var(--white);
                        font-size: 1rem;
                        margin-top: -1rem;
                        width: 30rem;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        display: -webkit-box;

                        @media (max-width: 1366px) {
                            width: 20rem;
                        }

                        @media (max-width: 1024px) {
                            width: 18rem;
                        }
                    }

                    .bottom-content {
                        display: flex;

                        p {
                            font-size: 1rem;
                            margin-top: 0.5rem;
                            margin-bottom: 0;
                        }

                        button {
                            width: 20rem;
                            margin-left: 1rem;
                            background: var(--green);
                            color: var(--white);
                            border: none;
                            padding: 0.5rem 1rem;
                            border-radius: 15px;
                            font-size: 0.9rem;
                            font-weight: 600;
                            font-family: 'Poppins', sans-serif;
                            cursor: pointer;
                            transition: 1s;
                        }
                    }
                }
            }
        }
    }

    .hotdog {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 6rem 0;

        img {
            width: 25rem;
        }
    }
`

export default HomeDetails