import styled from "styled-components";

const PagesDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: min(1200px, 100% - 2rem);
    margin: 0 auto;
    padding: clamp(1.5rem, 3vw, 3rem) 0;

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

        @media (max-width: 768px){
            font-size: 1rem;
            text-align: center;
            padding: 20px 1rem;
        }
    }

    .advicePets {
        font-size: 0.8rem;
        margin-top: -1rem;
        color: var(--gray-alt);
    }

    .titlePets {
        color: var(--green);
    }

    input {
        margin-top: 1rem;
        width: min(900px, 90vw);
        padding: 1.2rem;
        border-radius: 25px;
        border: none;
        background: var(--white);
        color: var(--gray-alt);
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        outline: none;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
            width: 100%;
            padding: 1rem;
        }
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

        @media (max-width: 768px) {
            padding: 20px 20px;
            margin: 2rem 1rem;
        }

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
        gap: clamp(1.5rem, 3vw, 2.5rem);
        min-height: 50vh;
        width: 100%;
        padding: 0 clamp(1rem, 3vw, 2rem);

        .content {
            cursor: pointer;
            width: min(18rem, 90vw);
            height: 25rem;
            margin: 0;

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
                    background: var(--green-bubble);
                    color: var(--white);
                    padding: 0.5rem;
                    text-align: center;
                    font-size: 0.9rem;
                    border-radius: 25px;
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }

                .locale {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`;

export default PagesDetails;
