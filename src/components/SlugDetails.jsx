import styled from "styled-components";

const SlugDetails = styled.div`
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 3rem 0 5rem 0;
        max-width: 50vw;

        .leftContent {
            img {
                width: 22rem;
                height: 25rem;
                border-radius: 15px 0 0 15px;
                object-fit: cover;
            }
        }

        .rightContent {
            background: var(--green);
            padding: 1rem;
            border-radius: 0 15px 15px 0;
            color: var(--white);
            height: 25rem;
            margin-top: -6px;

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
        }
    }

    iframe {
        margin: -4rem 0 2rem 0;
        border: none;
        border-radius: 15px;
        height: 450px;
    }
`;

export default SlugDetails;
