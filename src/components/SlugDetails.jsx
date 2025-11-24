import styled from "styled-components";

const SlugDetails = styled.div`
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 3rem auto 5rem;
        max-width: min(1100px, 100% - 2rem);
        width: 100%;
        gap: clamp(1.5rem, 3vw, 3rem);
        flex-wrap: wrap;

        .leftContent {
            img {
                width: clamp(16rem, 35vw, 22rem);
                height: clamp(18rem, 40vw, 25rem);
                border-radius: 15px;
                object-fit: cover;
            }
        }

        .rightContent {
            background: var(--green);
            padding: clamp(1rem, 2vw, 1.5rem);
            border-radius: 15px;
            color: var(--white);
            height: auto;
            min-width: clamp(16rem, 45vw, 26rem);

            p {
                margin-top: 1rem;
            }

            .link {
                margin-top: 2rem;
            }

            a {
                background: var(--green-alt);
                padding: 1rem;
                margin-right: 1rem;
                border-radius: 5px;
                color: var(--white);
                text-decoration: none;

                &:hover {
                    background: var(--green-bubble);
                    transition: 1s;
                }
            }

            button {
                background: var(--green-alt);
                border-radius: 5px;
                padding: 0.9rem;
                color: var(--white);
                border: none;
                cursor: pointer;
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                font-weight: 400;
                font-size: 1rem;
                width: auto;
                height: auto;

                &:hover {
                    background: var(--green-bubble);
                    transition: 1s;
                }
            }

            .report {
                text-align: center;
                background: var(--red);
                color: var(--white);
                width: 14rem;
                height: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0rem 1rem;
                border-radius: 5px;
                margin: 0 auto;
                transition: 0.3s;
                cursor: pointer;
                margin-top: 2rem;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
    }

    iframe {
        margin: -4rem auto 2rem;
        border: none;
        border-radius: 15px;
        height: 450px;
        width: min(1100px, 100% - 2rem);

        @media (max-width: 768px) {
            height: 320px;
        }
    }
`;

export default SlugDetails;
