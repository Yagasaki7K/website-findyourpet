import styled from 'styled-components'

const HomeDetails = styled.div`
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.2);
    background: var(--green);

    footer {
        display: flex;
        justify-content: center;
        margin-left: 100px;
        color: var(--white);

        @media (max-width: 1366px) {
            margin-left: 200px;
        }

        @media (max-width: 768px) {
            margin-left: 50px;
        }

        @media (max-width: 414px) {
            flex-direction: column;
            text-align: center;
        }

        .footer-content {
            margin-right: 200px;
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                margin-right: 50px;
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
        color: var(--gray);
        margin-top: 20px;
        padding: 1rem 0;
    }

    hr {
        margin-top: 2rem;
        margin-bottom: -1rem;
        width: 50%;
        margin-left: 25%;
        border: 1px solid var(--gray);
    }
`

export default HomeDetails
