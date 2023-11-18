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
    }

    li {
        list-style: none;

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
        padding: 4rem 0;

        img {
            border-radius: 15px;
            width: 35rem;
        }

        h1 {
            font-size: 3.75rem;
            line-height: 1;
            font-weight: 900;
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
            padding: 0 2rem;

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


            svg {
                margin-left: 12rem;
                color: gray;
            }
        }

        .leftSide-highlight {
            width: 60%;

            p {
                width: 80%;
                margin: 2rem 0;
            }
        }

        .rightSide {
            width: 50%;
            padding: 0 2rem;

            svg {
                color: gray;
            }
        }

        .rightSide-highlight {
            position: relative;
            width: 40%;
            height: 100%;

            svg {
                width: 100%;
                margin-left: 5.5rem;
                height: 60%;
            }
            img {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                width: auto;
                max-width: 90%;
                z-index: 100;
            }
        }

        .rightSide-about {
            width: 100%;
            p {
                margin: 2rem 0;
            }
        }

        .contact {
            display: flex;
            margin-top: 2rem;
            padding: 0 3rem;

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
                    font-style: italic;
                }

                h4 {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    color: #b4acac;
                }
            }
        }

        .pet4 {
            /* margin-top: -25rem; */
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
        padding: 1rem 3rem;
        margin: 2rem 0;

        .content {
            flex-direction: column;
            border: 1px solid #ccc;
            border-radius: 15px;
            background: rgba(0,0,0,0.5);

            h1 {
                font-size: 2.5rem;
                padding: 2rem;
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

.about {
    background-color: #e5e5e5;
    color: #000;
    margin-top: 4rem;
    border-top: 5px solid #30AD80;
    .content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }
    .about-header {
        p {
            margin: 2rem 0;
        }
    }
    .about-search {
        input {
            padding: 1rem 2rem;
            width:100%;
            box-sizing: border-box;
            border-radius: 10px;
            border: none;
        }
        
        ul {
            padding: 2rem 0 0;
            display: flex;
            gap: 1rem;
            height: 100%;
            li {
                width: calc(50% - 8px);
                background-color: #4b4a4abe;
                border-radius: 10px;
                a {
                    width: 100%;
                    display: block;
                    display: inline-flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    padding: 2rem 0;
                }
                svg {
                    font-size: 5rem;
                    margin: 0;
                }
            }
        }
    }
}

.know {
    background-color: #e7e1e1;
    color: #000;
    .content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }
    .know-header {
        p {
            margin: 3rem 0;
            max-width: 60%;
        }
    }
    .know-search {
        ul {
            padding: 2rem 0 0;
            display: flex;
            gap: 1rem;
            height: 100%;
            li {
                width: calc(33% - 1rem * 2);
                height: 100%;
                border-radius: 10px;
                a {
                    width: 100%;
                    display: block;
                    display: inline-flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    padding: 2rem 0;
                    color: #000;

                    span {
                        font-weight: 700;
                        font-size: 1.2rem;
                        color: #30AD80;
                    }
                    p {
                        height: 3rem;
                        text-align: center;
                        width: 70%;
                        margin: 1rem 0 0;
                    }
                    svg {
                        font-size: 5rem;
                        margin: 0;
                        color: #30AD80;
                    }
                    button {
                        color: #30AD80;
                        background: unset;
                        border: 1px solid #30AD80;
                        border-radius: 20px;
                        margin: 2rem 0 0;
                        
                        :hover {
                            color: #30AD80 !important;
                            -webkit-text-fill-color: unset;
                        }
                    }
                }
            }
        }
    }
}
`

export default HomeDetails
