import styled from 'styled-components'

const SlugDetails = styled.div`
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .leftContent {
            img {
                width: 20rem;
                margin-right: 2rem;
                border-radius: 5px;
            }
        }

        .rightContent {
            p {
                width: 80%;
                margin-top: 1rem;
            }

            .link {
                margin-top: 2rem;
            }

            a {
                background: #30ad80;
                padding: 1rem;
                margin-right: 1rem;
                border-radius: 5px;
                color: #fff;
                text-decoration: none;

                :hover {
                    background: #075E54;
                    transition: 1s;
                }
            }

            button {
                background: #30ad80;
                border-radius: 5px;
                padding: 0.9rem;
                color: #fff;
                border: none;
                cursor: pointer;
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                font-weight: 400;
                font-size: 1rem;
                width: auto;
                height: auto;

                :hover {
                    background: #075E54;
                    transition: 1s;
                }
            }

            #buttonON {
                display: initial;
            }

            #buttonOFF {
                display: none;
            }
        }
    }
`

export default SlugDetails
