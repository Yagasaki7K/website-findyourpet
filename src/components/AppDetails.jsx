import styled from 'styled-components'
import Colors from '../utils/Colors'

const HomeDetails = styled.div`
    color: #fff;
    position: relative;
    *{
        padding: 0;
        margin: 0;
        }

    a {
        font-weight: 400;
    }
  

  /* This code adjusts the position of an image based on the screen size */
    @media (max-width: 414px) {
    left: 3%;
    }

    @media (max-width: 360px) {
     left: 20%;
    }

 
    ul {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;


        img {
            width: 20rem;
            margin-left: 4rem;
            margin-right: 4rem;

            @media (max-width: 1600px) {
                margin-left: 10rem;
            }

            @media (max-width: 1600px) {
                margin-left: 2rem;
            }

            @media (max-width: 1440px) {
                margin-left: 8rem;
            }

            @media (max-width: 1366px) {
                margin-left: 1.5rem;
                width: 15rem;
            }

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
            margin-right: 2rem;
            margin-top: 2rem;
            list-style: none;

            @media (max-width: 1024px) {
                display: none;
            }

            a {
                color: #fff;
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
            color: #fff;
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            border-radius: 15px;
            margin-top: 1.5rem;
            font-weight: bold;

            @media (max-width: 1600px) {
                margin-left: 10rem;
            }

            @media (max-width: 1440px) {
                margin-left: 2rem;
            }

            @media (max-width: 1366px) {
                margin-left: 10rem;
                font-size: 0.8rem;
                width: 10%;
            }

            @media (max-width: 1024px) {
                display: none;
            }

            height: 2.5rem;
            width: 10rem;

            cursor: pointer;

            :hover {
                transition: 2s;
                background: ${Colors.primaryAlt};
                background: linear-gradient(90deg, ${Colors.primaryAlt} 0%, ${Colors.primary} 100%);
            }
        }
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        line-height: 5rem;
        max-width: 800px;
        margin: 0 auto;

        @media (max-width: 768px) {
            margin-left: 5rem;
        }

        @media (max-width: 600px) {
            margin-left: 1.5rem;
        }

        h1 {
            font-size: 5rem;
            margin-top: 5rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
     
            @media (max-width: 1366px) {
                font-size: 2.7rem;
            }

            @media (max-width: 1024px) {
                font-size: 2.0rem;
            }

            @media (max-width: 600px) {
                margin-top: 2rem;
                font-size: 2rem;
            }
        }

        .love {
            background: ${Colors.primary};
            background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        button {
            background: ${Colors.primary};
            background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
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
                background: ${Colors.primaryAlt};
                background: linear-gradient(90deg, ${Colors.primaryAlt} 0%, ${Colors.primary} 100%);
            }
        }

        .links {
            margin-top: 18rem;
            margin-left: 2rem;
     
            @media (max-width: 1440px) {
                margin-top: 12rem;
            }

            @media (max-width: 1366px) {
                margin-top: 6rem;
            }

                  

            a {
                color: #fff;
                text-decoration: none;

                :hover {
                    background: ${Colors.primary};
                    background: linear-gradient(90deg, ${Colors.primary} 0%, ${Colors.primaryAlt} 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
`

export default HomeDetails
