import styled from 'styled-components'

const PagesDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .advice {
        background: var(--green);
    }

    .advice-yellow {
        background: var(--yellow);
    }

    .advice, .advice-yellow {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        border: none;
        font-weight: 500;
        width: 100%;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        outline: none;
        color: var(--white);
        transition: 1s;
    }

    .advicePets {
        font-size: 0.8rem;
        margin-top: -1rem;
        color: var(--gray-alt);
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 30px 0 1rem 0rem;
        padding: 20px 40px;
        background: var(--green);
        color: var(--white);
        border-radius: 15px;

        input, textarea, select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            background: var(--white);
            color: var(--gray-alt);
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            width: 85%;

            :focus {
                outline: none;
            }
        }

        input, textarea, select, i, h4 {
            margin-left: 1rem;
        }

        i {
            font-size: 10px;
            color: var(--white);
        }

        h4 {
            margin-bottom: 5px;
            color: var(--white);
        }

        .send, .reset {
            color: var(--white);
            font-weight: 600;
            font-size: 1rem;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 1s;

            
        }

        .send {
            margin-top: 20px;
            background: var(--green-alt);
            margin: 1rem;

            &:hover {
                filter: brightness(80%);
            }
        }

        .reset {
            background: var(--yellow);

            &:hover {
                filter: brightness(80%);
            }
        }
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
                margin: 1rem 10rem 1rem 0;

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
`

export default PagesDetails