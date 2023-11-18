import styled from 'styled-components'
import Colors from '../utils/Colors'

const HomeDetails = styled.div`

color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)};

position: relative;

a {
    font-weight: 400;
}

* {
    padding: 0;
    margin: 0;
}

@media (max-width: 414px) {
    left: 3%;
}

@media (max-width: 360px) {
    left: 20%;
}

ul {
    display: flex;
    width: 100%;
    padding-top: 1rem;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    height: 72px;

    @media (max-width: 1366px) {
        padding-top: 0.6rem;
    }

    img {
        max-width: 200px;
        /* margin-left: 4rem;
        margin-right: 4rem; */

        /* @media (max-width: 1920px) {
            margin-top: 2rem;
        }

        @media (max-width: 1600px) {
            margin-left: -2rem;
            margin-top: 1rem;
        }

        @media (max-width: 1366px) {
            margin-top: 0.6rem;
        }

        @media (max-width: 1440px) {
            margin-left: 3rem;
        }

        @media (max-width: 1366px) {
            margin-left: 1.5rem;
        }

        @media (max-width: 1024px) {
            margin-top: 5rem;
        }

        @media (max-width: 768px) {
            margin-left: 10rem;
        }

        @media (max-width: 600px) {
            margin-top: 0rem;
            margin-left: 0rem;
        } */
    }

    li {
        /* margin-right: 2rem;
        margin-top: 2rem; */
        list-style: none;

        /* @media (max-width: 1600px) {
            margin-top: 1rem;
        }

        @media (max-width: 1366px) {
            margin-top: 1rem;
        }

        @media (max-width: 1024px) {
            display: none;
        } */

        a {
            color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)};
            text-decoration: none;

            :hover {
                transition: 1s;
                background: ${Colors.primary};
                background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

    }

    button {
        background: ${Colors.primary};
        background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
        color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)};
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        border-radius: 15px;
        font-weight: bold;
        cursor: pointer;

        @media (max-width: 1920px){
            /* margin-left: 45rem; */
        }

        @media (max-width: 1600px) {
            /* margin-left: 25rem; */
        }

        @media (max-width: 1440px) {
            /* margin-left: 15rem; */
        }

        @media (max-width: 1366px) {
            /* margin-left: 10rem; */
        }

        @media (max-width: 1024px) {
            display: none;
        }

        :hover {
            transition: 2s;
            background: ${Colors.primaryAlt};
            background: linear-gradient(90deg, ${Colors.primaryAlt} 0%, ${Colors.primary} 100%);
        }
    }
}

.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 1200px;
        padding: 3rem 0;
        /* font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"; */

        img {
            border-radius: 15px;
            width: 35rem;
        }

        h1 {
            font-size: 3.75rem;
            line-height: 1;
            font-weight: 900;
            font-family: 'Nunito', sans-serif;
            font-family: 'Marhey', sans-serif;
        }

        p {
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: #b4acac;
            margin-top: 1rem;
        }

        .leftSide {
            width: 50%;

            button {
                background: #30ad80;
                color: #fff;
                width: 8rem;
                height: 3rem;
                margin-top: 1rem;
                text-transform: uppercase;
                font-weight: 900;
            }

            .newsletter {
                input {
                    width: 25rem;
                    border-radius: 0.375rem;
                    border: none;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    margin-top: 1.2rem;
                }

                button {
                    background: #30ad80;
                    color: #fff;
                    width: 6rem;
                    height: 2.8rem;
                    margin-left: 0.5rem;
                }
            }

            .contact {
                display: flex;
                margin-top: 2rem;

                img {
                    width: 4rem;
                    border: 1px solid #30ad80;
                    border-radius: 50px;
                }

                .right-contact {
                    padding-left: 1.5rem;

                    h2 {
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }

                    h4 {
                        font-size: 1rem;
                        line-height: 1.5rem;
                        color: #b4acac;
                    }
                }
            }

            svg {
                margin-left: 12rem;
                color: gray;
            }
        }

        .rightSide {
            width: 50%;

            svg {
                color: gray;
            }
        }

        .pet1 {
            margin-left: -23rem;
        }

        .pet4 {
            margin-top: -25rem;
        }
    }

    .advice {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        background: #268864;
        padding: 8rem;
        margin-top: 5rem;
        margin-bottom: -15rem;

        h1 {
            line-height: 2.5rem;
        }

        .client {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            margin-top: 3rem;

            img {
                width: 3rem;
                border-radius: 250px;
                border: 1px solid #fff;
            }

            h4 {
                margin-top: 0.5rem;
            }
        }
    }

    .joinUs {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding: 8rem;
        margin-top: 10rem;
        margin-bottom: -22rem;

        .content {
            flex-direction: column;
            border: 1px solid #ccc;
            border-radius: 15px;
            padding: 5rem;
            background: rgba(0,0,0,0.5);

            h1 {
                max-width: 70rem;
                span {
                    color: #30ad80;
                }
            }

            i {
                max-width: 50rem;
                margin-top: 2rem;
                margin-bottom: 2rem;
                font-size: 1.125rem;
                line-height: 1.75rem;
            }

            button {
                background: #30ad80;
                font-size: 1rem;
                color: #fff;
                width: 8rem;
                height: 3rem;
                margin-left: 0.5rem;
            }
        }


    }

    .links {
        margin-top: 16rem;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;

        @media (max-width: 1920px) {
            margin-top: 18rem;
        }

        @media (max-width: 1600px) {
            margin-top: 7rem;
        }

        @media (max-width: 1366px) {
            margin-top: 6rem;
        }


        @media (max-width: 1280px) {
            margin-top: 9rem;
        }


        @media (max-width: 1024px) {
            margin-top: 3rem;
        }

        @media (max-width: 600px) {
            margin-top: 10rem;
        }

        a {
            color: ${(props) => (props.theme.modo.darkTheme === 'darkTheme' ? Colors.lightColor : Colors.lightColor)};
            text-decoration: none;

            :hover {
                background: ${Colors.primary};
                background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        p {
            margin: 1rem 0;
        }
    }
}
`

export default HomeDetails
