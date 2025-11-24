import styled from "styled-components";

const FooterDetails = styled.div`
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.2);
    background: var(--green);

    footer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(2rem, 4vw, 5rem);
        padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem);
        margin: 0 auto;
        max-width: 1400px;
        color: var(--white);

        @media (max-width: 414px) {
            flex-direction: column;
            text-align: center;
        }

        .footer-content {
            display: flex;
            flex-direction: column;
            min-width: 180px;

            @media (max-width: 768px) {
                align-items: center;
            }

            h2 {
                margin: 2rem 0 1rem 0;
            }

            a {
                font-weight: 300;
                margin-top: 10px;

                &:hover {
                    color: var(--green-alt);
                }
            }

            li {
                list-style: none;
            }

            p {
                font-size: 14px;
            }
        }
    }

    .copyright {
        text-align: center;
        color: var(--white);
        margin-top: 20px;
        padding: 1rem 0;
    }

    hr {
        margin: 2rem auto -1rem;
        width: min(50rem, 80%);
        border: 1px solid var(--gray);
    }
`;

export default FooterDetails;
