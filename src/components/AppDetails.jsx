import styled from 'styled-components'
import Colors from '../utils/Colors'

const HomeDetails = styled.div`
    color: #fff;
    position: absolute;

    margin-top: -61rem;

    a {
        font-weight: 400;
    }

    @media (max-width: 1366px) {
        margin-top: -41rem;
    }

    @media (max-width: 1024px) {
        margin-top: -84rem;
    }

    @media (max-width: 768px) {
        margin-top: -62rem;
    }

    @media (max-width: 600px) {
        margin-top: -45rem;
    }

    ul {
        margin-top: 2rem;
        display: flex;

        img {
            width: 20rem;
            margin-top: -0.5rem;
            margin-right: 5rem;
            margin-left: 2rem;

            @media (max-width: 1024px) {
                margin-left: 19rem;
            }

            @media (max-width: 768px) {
                margin-left: 10rem;
            }

            @media (max-width: 600px) {
                margin-top: 0rem;
                margin-left: 0rem;
            }
        }
        
        li {
            margin-right: 3rem;
            margin-top: 2.2rem;
            list-style: none;

            @media (max-width: 1024px) {
                display: none;
            }

            a {
                color: #fff;
                text-decoration: none;

                :hover {
                    transition: 1s;
                    background: ${Colors.purple};
                    background: linear-gradient(90deg, ${Colors.purple} 0%, ${Colors.purpleLight} 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent; 
                }
            }

        }

        button {
            background: ${Colors.purple};
            background: linear-gradient(90deg, ${Colors.purple} 0%, ${Colors.purpleLight} 100%); 
            color: #fff;
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            border-radius: 15px;
            margin-left: 45rem;
            margin-top: 1.5rem;
            font-weight: bold;

            @media (max-width: 1366px) {
                margin-left: 10rem;
            }

            @media (max-width: 1024px) {
                display: none;
            }

            height: 2.5rem;
            width: 10rem;

            cursor: pointer;

            :hover {
                transition: 2s;
                background: ${Colors.purpleLight};
                background: linear-gradient(90deg, ${Colors.purpleLight} 0%, ${Colors.purple} 100%); 
            }
        }   
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin-top: 5rem;
        margin-left: 18.5rem;
        line-height: 5rem;

        @media (max-width: 1366px) {
            margin-top: -2rem;
            margin-left: 14.5rem;
        }

        @media (max-width: 1024px) {
            margin-left: 13rem;
        }

        @media (max-width: 768px) {
            margin-left: 5rem;
        }

        @media (max-width: 600px) {
            margin-left: 1.5rem;
        }

        h1 {
            font-size: 5rem;
            margin-top: 8rem;
            margin-bottom: 2rem;
            text-transform: uppercase;

            @media (max-width: 600px) {
                margin-top: 2rem;
                font-size: 3rem;
            }
        }

        .love {
            background: ${Colors.purple};
            background: linear-gradient(90deg, ${Colors.purple} 0%, ${Colors.purpleLight} 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        button {
            background: ${Colors.purple};
            background: linear-gradient(90deg, ${Colors.purple} 0%, ${Colors.purpleLight} 100%); 
            color: #fff;
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            font-size: 1.2rem;
            border-radius: 25px;
            padding: 0rem 3rem;

            cursor: pointer;

            :hover {
                transition: 2s;
                background: ${Colors.purpleLight};
                background: linear-gradient(90deg, ${Colors.purpleLight} 0%, ${Colors.purple} 100%); 
            }
        }
        
        .links {
            margin-top: 20rem;

            @media (max-width: 1366px) {
                margin-top: 6rem;
            }

            @media (max-width: 600px) {
                margin-top: 5rem;
            }

            a {
                color: #fff;
                text-decoration: none;

                :hover {
                    background: ${Colors.purple};
                    background: linear-gradient(90deg, ${Colors.purple} 0%, ${Colors.purpleLight} 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent; 
                }
            }
        }
    }
`

export default HomeDetails